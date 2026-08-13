import SwiftUI
import WebKit

/// Enveloppe SwiftUI autour de `WKWebView`.
///
/// - Gestes de navigation avant/arrière activés.
/// - Tirer pour rafraîchir.
/// - Remonte l'état de chargement/erreur via des `@Binding`.
/// - `reloadTrigger` : incrémente cette valeur pour forcer un rechargement.
struct WebView: UIViewRepresentable {
    let url: URL
    @Binding var isLoading: Bool
    @Binding var didFail: Bool
    @Binding var reloadTrigger: Int

    func makeCoordinator() -> Coordinator { Coordinator(self) }

    func makeUIView(context: Context) -> WKWebView {
        let config = WKWebViewConfiguration()
        config.allowsInlineMediaPlayback = true

        let webView = WKWebView(frame: .zero, configuration: config)
        webView.navigationDelegate = context.coordinator
        webView.allowsBackForwardNavigationGestures = true
        webView.scrollView.contentInsetAdjustmentBehavior = .never

        let refresh = UIRefreshControl()
        refresh.addTarget(
            context.coordinator,
            action: #selector(Coordinator.handleRefresh(_:)),
            for: .valueChanged
        )
        webView.scrollView.refreshControl = refresh

        context.coordinator.webView = webView
        context.coordinator.lastReloadTrigger = reloadTrigger
        webView.load(URLRequest(url: url))
        return webView
    }

    func updateUIView(_ webView: WKWebView, context: Context) {
        // Rechargement demandé depuis SwiftUI (bouton « Réessayer »).
        if context.coordinator.lastReloadTrigger != reloadTrigger {
            context.coordinator.lastReloadTrigger = reloadTrigger
            webView.load(URLRequest(url: url))
        }
    }

    final class Coordinator: NSObject, WKNavigationDelegate {
        private let parent: WebView
        weak var webView: WKWebView?
        var lastReloadTrigger = 0

        init(_ parent: WebView) { self.parent = parent }

        @objc func handleRefresh(_ sender: UIRefreshControl) {
            webView?.reload()
        }

        // Les callbacks de WKNavigationDelegate sont délivrés sur le thread principal.
        func webView(_ webView: WKWebView, didStartProvisionalNavigation navigation: WKNavigation!) {
            parent.isLoading = true
            parent.didFail = false
        }

        func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
            parent.isLoading = false
            webView.scrollView.refreshControl?.endRefreshing()
        }

        func webView(_ webView: WKWebView, didFail navigation: WKNavigation!, withError error: Error) {
            finishWithError(webView)
        }

        func webView(_ webView: WKWebView, didFailProvisionalNavigation navigation: WKNavigation!, withError error: Error) {
            finishWithError(webView)
        }

        private func finishWithError(_ webView: WKWebView) {
            parent.isLoading = false
            parent.didFail = true
            webView.scrollView.refreshControl?.endRefreshing()
        }
    }
}
