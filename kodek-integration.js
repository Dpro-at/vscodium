/**
 * KODEK Integration Script
 * 
 * This script injects KODEK customizations into VSCodium
 * It should be loaded after VSCodium initializes
 */

(function() {
    'use strict';
    
    console.log('KODEK: Starting integration...');
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initKodek);
    } else {
        initKodek();
    }
    
    function initKodek() {
        console.log('KODEK: Initializing...');
        
        // Inject KODEK styles
        injectStyles();
        
        // Replace logo
        replaceLogo();
        
        // Add menu bar tabs
        addMenuBarTabs();
        
        // Replace welcome screen
        replaceWelcomeScreen();
        
        console.log('KODEK: Integration complete!');
    }
    
    function injectStyles() {
        const style = document.createElement('style');
        style.id = 'kodek-styles';
        style.textContent = `
            /* KODEK Custom Styles */
            :root {
                --kodek-primary: var(--vscode-statusBar-background, #007acc);
                --kodek-background: var(--vscode-editor-background, #1e1e1e);
                --kodek-foreground: var(--vscode-editor-foreground, #d4d4d4);
            }
            
            .kodek-menu-tab {
                padding: 5px 15px;
                cursor: pointer;
                color: var(--kodek-foreground);
                transition: background-color 0.2s;
            }
            
            .kodek-menu-tab:hover {
                background-color: var(--vscode-list-hoverBackground, #2a2d2e);
            }
            
            .kodek-menu-tab.active {
                background-color: var(--vscode-list-activeSelectionBackground, #094771);
                border-bottom: 2px solid var(--kodek-primary);
            }
        `;
        document.head.appendChild(style);
    }
    
    function replaceLogo() {
        // Replace title bar logo
        const titleBar = document.querySelector('.monaco-workbench .part.titlebar');
        if (titleBar) {
            const logo = titleBar.querySelector('img, svg');
            if (logo) {
                // You can replace with KODEK logo path
                console.log('KODEK: Logo replacement ready');
            }
        }
    }
    
    function addMenuBarTabs() {
        const menuBar = document.querySelector('.menubar');
        if (menuBar) {
            // Add Task, Agent, Editor tabs
            const tabs = ['Task', 'Agent', 'Editor'];
            tabs.forEach(tab => {
                const tabElement = document.createElement('div');
                tabElement.className = 'kodek-menu-tab';
                tabElement.textContent = tab;
                tabElement.addEventListener('click', () => {
                    console.log(`KODEK: ${tab} tab clicked`);
                });
                menuBar.insertBefore(tabElement, menuBar.firstChild);
            });
            console.log('KODEK: Menu bar tabs added');
        }
    }
    
    function replaceWelcomeScreen() {
        // This will be called when welcome screen is shown
        const observer = new MutationObserver((mutations) => {
            const welcomeScreen = document.querySelector('.welcome-page, .getting-started-page');
            if (welcomeScreen) {
                // Inject KODEK welcome content
                console.log('KODEK: Welcome screen found');
            }
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
})();

