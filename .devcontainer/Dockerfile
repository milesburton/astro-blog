FROM mcr.microsoft.com/devcontainers/javascript-node:18-bullseye

# Install additional dependencies
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends \
        git \
        curl \
        fish \
        software-properties-common \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /workspace

# Install Astro CLI globally
RUN npm install -g create-astro@latest \
    && npm cache clean --force

# Switch back to root to set permissions
USER root

# Modify node user and group to be vscode
RUN usermod -l vscode node \
    && groupmod -n vscode node

# Prepopulate .bashrc
RUN mkdir -p /defaults \
    && echo "export PATH=\$PATH:/usr/local/bin" > /defaults/.bashrc

# Set up persistence directories
RUN mkdir -p /commandhistory \
    && mkdir -p /home/vscode/.config/fish \
    && mkdir -p /home/vscode/.ssh \
    && mkdir -p /home/vscode/.vscode-settings-storage \
    && chown -R vscode:vscode /home/vscode \
    && chown -R vscode:vscode /commandhistory

# Set up fish configuration
RUN echo "set -g fish_greeting ''" > /home/vscode/.config/fish/config.fish \
    && echo "set -gx HISTFILE /commandhistory/.fish_history" >> /home/vscode/.config/fish/config.fish \
    && chown -R vscode:vscode /home/vscode/.config/fish

# Make fish the default shell
RUN chsh -s /usr/bin/fish vscode

# Switch back to vscode user
USER vscode

# Set default shell to fish
SHELL ["/usr/bin/fish", "--command"]
