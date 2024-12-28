# experimental.milesburton.com

A development container configuration for Astro projects with comprehensive tooling and extensions, centred around a documentation-first approach.

## 🚀 Quick Start

1. **Prerequisites:**

   - Docker Desktop installed and running
   - Visual Studio Code with Remote Development extension pack
   - Git

2. **Setup:**

   ```bash
   # Clone the repository
   git clone https://github.com/milesburton/astro-blog

   # Open in VS Code
   code [project-directory]
   ```

3. **Development Container:**
   - When VS Code opens, you'll see a prompt to "Reopen in Container"
   - Click "Reopen in Container" to start the dev container
   - Wait for the container to build (this may take a few minutes on first run)

## 📚 Documentation First

This project follows a documentation-first approach. The documentation site serves as the primary entry point for developers:

1. **Start the docs:**

   ```bash
   # From the root directory
   pnpm dev

   # Or specifically start just the docs
   pnpm --filter "@experimental.milesburton.com/docs" dev
   ```

2. **Access the docs:**
   - Open http://localhost:4321 in your browser
   - This is your primary development hub!

## 🛠️ Development Environment

### Dev Container Features

The development container provides a consistent, pre-configured development environment with the following features:

#### Development Tools

- Node.js 18 environment
- Git with persistent configuration
- Fish shell with persistent history and configuration
- Persistent SSH configuration
- Persistent VS Code settings

#### VS Code Extensions

The container comes pre-installed with essential extensions:

**Astro & Web Development:**

- Astro: Official Astro extension
- Tailwind CSS: Intelligent CSS tooling
- MDX Support: Enhanced MDX editing
- PostCSS Language Support
- Auto Rename Tag: HTML/XML tag renaming
- Path Intellisense: Filename autocompletion
- NPM Intellisense: NPM dependency autocompletion
- Import Cost: Display import/require package sizes
- Babel JavaScript: Modern JavaScript support

**Code Quality:**

- Prettier: Code formatting
- ESLint: JavaScript linting
- Code Spell Checker
- Better Comments: Comment highlighting
- TODO Highlight: Highlight TODO comments

**Git Integration:**

- GitLens: Enhanced Git capabilities
- Git Graph: Repository visualisation

**Database & Docker:**

- MongoDB for VS Code
- Docker: Container management

**Markdown & Documentation:**

- Markdown All in One: Enhanced markdown support
- Material Icon Theme: File icons

#### Persistent Storage

The container maintains persistent volumes for:

- Shell configuration (.bashrc)
- Command history
- Git configuration
- Fish shell settings
- SSH keys and configuration
- VS Code settings

### Project Structure

```
.
├── .devcontainer/               # Dev container configuration
│   ├── devcontainer.json       # Container and VS Code settings
│   └── Dockerfile             # Container image definition
├── apps/
│   └── docs/                  # Documentation site (Astro + Starlight)
├── packages/                  # Shared packages
├── configs/                   # Shared configurations
│   ├── eslint/
│   └── tsconfig/
└── pnpm-workspace.yaml        # Workspace configuration
```

## 🧰 Available Scripts

- `pnpm dev` - Start development servers (including docs)
- `pnpm build` - Build all applications
- `pnpm lint` - Lint all code
- `pnpm test` - Run tests

## 🤝 Contributing

1. Ensure you're working within the dev container
2. Start with the documentation site to understand the project
3. Make your changes
4. Submit a pull request

## 🔧 Troubleshooting

### Common Dev Container Issues

1. **Git hooks not working:**

   - If git hooks (husky) are not working, run:
     ```bash
     git config --unset core.hookspath
     ```
   - This ensures Git uses the correct hooks path for the project

1. **Container fails to build:**

   - Ensure Docker Desktop is running
   - Try rebuilding the container: Command Palette -> "Remote-Containers: Rebuild Container"

1. **Port conflicts:**

   - The docs run on port 4321 by default
   - If you see port conflicts, check for other running services
   - The container forwards port 3000 by default for additional services

1. **Node modules issues:**

   - Within the container, try:
     ```bash
     pnpm clean
     pnpm install
     ```

1. **Persistence issues:**
   - If settings aren't persisting between sessions, check Docker volume mounts
   - Verify Docker has necessary permissions

### Getting Help

- Check the documentation site
- Open an issue on GitHub
- Contact the maintainers

## 📝 License

MIT License

Copyright (c) 2024 Miles Burton

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.# Test hook

# Another test

# Test hooks

# Another test

# Test

# Test

# Test

# Test

# Test

# Test

# Test

# Test

Test
Test
Test
Test
