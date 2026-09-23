### Alerte de Sécurité Critique : Nuxt.js

Une vulnérabilité critique a été détectée dans Nuxt.js (version 4.5.1).

**Risques** :
- RCE côté serveur (Remote Code Execution)
- Instanciation non autorisée de composants via les props des "Server Islands"
- Contournement de l'autorisation des règles de routage
- DoS (Déni de service) sur les composants serveur
- Divulgation de chemin sur le serveur de développement

**Versions affectées** : Toutes les versions inférieures à `v4.5.1`.

**Correctif** :
La version `v4.5.1` corrige ces failles.

**Action recommandée** :
Mettez à jour immédiatement vos dépendances Nuxt :
```bash
npx nuxt upgrade --dedupe
```
Si vous utilisez les règles de routage `cache`, `swr` ou `isr`, purgez votre cache CDN/Edge après la mise à jour, car des payloads (`_payload.json`) pourraient avoir été divulgués.