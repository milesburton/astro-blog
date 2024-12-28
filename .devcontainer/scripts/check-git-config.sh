#!/bin/bash

check_git_config() {
    local email=$(git config --global user.email)
    local name=$(git config --global user.name)
    
    if [ -z "$email" ] || [ -z "$name" ]; then
        echo "⚠️  Git configuration incomplete!"
        echo "Please set your Git credentials:"
        echo ""
        [ -z "$email" ] && echo "git config --global user.email \"you@example.com\""
        [ -z "$name" ] && echo "git config --global user.name \"Your Name\""
        echo ""
        return 1
    else
        echo "✅ Git configured for: $name <$email>"
        return 0
    fi
}

check_git_config
