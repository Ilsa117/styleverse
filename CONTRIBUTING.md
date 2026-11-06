# Contributing / Team Rules

## Branches
- `main` — stable, demo-ready only. No direct pushes.
- `develop` — integration branch. No direct pushes; use Pull Requests.
- `feature/wardrobe-3d`, `feature/styling-engine`, `feature/skin-tone`, `feature/ar-tryon` — one per module owner.
- Extra work: `feature/<short-name>`, bug fixes: `fix/<short-name>`.

## Daily workflow
```bash
git checkout feature/<your-branch>
git pull origin develop          # get latest from team
# ... work ...
git add .
git commit -m "feat: short description"
git push origin feature/<your-branch>
```
Then open a Pull Request into `develop`. At least one other member reviews before merge.

## Commit messages
`feat:` new feature, `fix:` bug fix, `docs:` documentation, `chore:` setup/config, `refactor:`, `test:`.

## Rules
1. Stay inside your module's folder; tell the group before changing shared files (e.g. `services/api.js`).
2. Merge `develop` into your branch every 2–3 days to avoid big conflicts.
3. Never commit `.env`, datasets, model weights or large `.glb` files.
4. Follow `docs/api-contract.md` for all data exchanged between modules; use mock data until a module is ready.
5. Log important decisions in `docs/decisions.md`.
