import SwiftUI

struct ContentView: View {
    /// URL du CV déployé sur Heroku. Change-la ici si l'app déménage.
    private let url = URL(string: "https://cv-lestage-34d2c9ae1cb0.herokuapp.com")!

    // Couleurs de la charte du CV.
    private let cream = Color(red: 0.969, green: 0.957, blue: 0.925) // #f7f4ec
    private let ink = Color(red: 0.102, green: 0.094, blue: 0.082)   // #1a1815

    @State private var isLoading = true
    @State private var didFail = false
    @State private var reloadTrigger = 0

    var body: some View {
        ZStack {
            cream.ignoresSafeArea()

            WebView(
                url: url,
                isLoading: $isLoading,
                didFail: $didFail,
                reloadTrigger: $reloadTrigger
            )
            .ignoresSafeArea(.container, edges: .bottom)
            .opacity(didFail ? 0 : 1)

            if isLoading && !didFail {
                ProgressView()
                    .controlSize(.large)
                    .tint(ink)
            }

            if didFail {
                errorView
            }
        }
    }

    private var errorView: some View {
        VStack(spacing: 14) {
            Image(systemName: "wifi.slash")
                .font(.system(size: 40, weight: .light))
                .foregroundStyle(ink)
            Text("Impossible de charger le CV")
                .font(.headline)
                .foregroundStyle(ink)
            Text("Vérifie ta connexion internet, puis réessaie.")
                .font(.subheadline)
                .foregroundStyle(.secondary)
                .multilineTextAlignment(.center)
            Button("Réessayer") {
                reloadTrigger += 1
            }
            .buttonStyle(.borderedProminent)
            .tint(ink)
            .padding(.top, 4)
        }
        .padding(32)
    }
}
