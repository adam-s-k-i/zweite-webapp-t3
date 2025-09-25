# Discord OAuth Setup Guide

## Schritt 1: Discord Developer Portal

1. Gehe zu https://discord.com/developers/applications
2. Klicke auf "New Application"
3. Gib einen Namen für deine App ein (z.B. "My T3 App")

## Schritt 2: OAuth2 Configuration

1. Im linken Menü: "OAuth2" → "General"
2. Kopiere die "Client ID" → `AUTH_DISCORD_ID` in `.env`
3. Klicke "Reset Secret" → kopiere das neue Secret → `AUTH_DISCORD_SECRET` in `.env`

## Schritt 3: Redirect URLs

1. Im "OAuth2" Bereich: "Redirects"
2. Füge folgende URLs hinzu:
   - `http://localhost:3000/api/auth/callback/discord`
   - `https://your-production-domain.com/api/auth/callback/discord`

## Schritt 4: Environment Variables

Aktualisiere deine `.env` Datei:

```env
AUTH_DISCORD_ID="your_discord_client_id"
AUTH_DISCORD_SECRET="your_discord_client_secret"
```

## Schritt 5: Test

1. Starte den Server neu: `npm run dev`
2. Besuche `http://localhost:3000/api/auth/signin`
3. Discord sollte als Login-Option erscheinen

## Troubleshooting

- **Fehler "Invalid OAuth2 redirect_uri"**: Überprüfe die Redirect URLs im Discord Developer Portal
- **Fehler "Invalid client credentials"**: Überprüfe Client ID und Secret in `.env`
- **Session nicht persistent**: Stelle sicher, dass `AUTH_SECRET` gesetzt ist

## Sicherheitshinweise

- Bewahre deine `.env` Datei sicher auf (nicht in Git commit)
- Verwende unterschiedliche Secrets für Entwicklung und Produktion
- Beschränke OAuth-Berechtigungen auf das Nötigste