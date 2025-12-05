# Garage Sale Backend

A backend API for managing garage sale items, built with Express, TypeScript, and MongoDB.

## Development

### Running the Server

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Releases & Changelog

This project uses [Conventional Commits](https://www.conventionalcommits.org/) and automated changelog generation.

### Commit Message Format

Use the following format for all commits:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `refactor`: Code refactoring (no functional changes)
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks, dependencies, etc.

**Examples:**
```bash
git commit -m "feat: add user authentication endpoints"
git commit -m "fix: resolve MongoDB connection timeout issue"
git commit -m "docs: update API documentation"
git commit -m "refactor: simplify item validation logic"
```

### Creating a Release

The project uses [standard-version](https://github.com/conventional-changelog/standard-version) to automate versioning and changelog generation.

**For the first release:**
```bash
npm run release:first
```

**For subsequent releases (automatic version bump based on commits):**
```bash
npm run release        # Automatically determines version bump
npm run release:patch  # 1.0.0 → 1.0.1 (bug fixes)
npm run release:minor  # 1.0.0 → 1.1.0 (new features)
npm run release:major  # 1.0.0 → 2.0.0 (breaking changes)
```

This will:
1. Bump the version in `package.json`
2. Update `CHANGELOG.md` with changes since last release
3. Create a git tag for the new version
4. Commit the changes

After running the release command, push the changes and tags:
```bash
git push --follow-tags origin main
```
