// ========================================
// DOWNLOADING AND LAUNCH GAME SIMULATION
// ========================================

class GameSimulation {
  constructor(gameName) {
    this.gameName = gameName;
    this.downloadProgress = 0;
    this.loadProgress = 0;
  }

  // Downloading simulation
  async download() {
    const green = '\x1b[32m';
    const reset = '\x1b[0m';

    const showProgress = (percent, label) => {
      const filled = Math.floor(percent / 2);
      const empty = 50 - filled;
      const bar = '█'.repeat(filled) + '░'.repeat(empty);
      process.stdout.write(`\r${green}${bar}${reset} ${percent}% - ${label}`);
    };

    console.log(`Downloading ${this.gameName}...`);
    for (let i = 0; i <= 100; i += 10) {
      showProgress(i, "Please wait...");
      await new Promise(resolve => setTimeout(resolve, 200));
      this.downloadProgress = i;
    }
    console.log("\n✓ Download complete!");
  }

  // Loading simulation
  async load() {
    const yellow = '\x1b[33m';
    const reset = '\x1b[0m';

    const showProgress = (percent, label) => {
      const filled = Math.floor(percent / 2);
      const empty = 50 - filled;
      const bar = '█'.repeat(filled) + '░'.repeat(empty);
      process.stdout.write(`\r${yellow}${bar}${reset} ${percent}% - ${label}`);
    };

    console.log(`Loading ${this.gameName}...`);
    for (let i = 0; i <= 100; i++) {
      showProgress(i, "Please wait...");
      await new Promise(resolve => setTimeout(resolve, 50));
      this.loadProgress = i;
    }
    console.log("\n✓ Loading complete!");
  }

  // Display menu
  showMenu() {
    const cyan = '\x1b[36m';
    const green = '\x1b[32m';
    const yellow = '\x1b[33m';
    const bold = '\x1b[1m';
    const reset = '\x1b[0m';

    console.log(`${cyan}${bold}╔════════════════════════════╗${reset}`);
    console.log(`${cyan}${bold}║         MAIN MENU          ║${reset}`);
    console.log(`${cyan}${bold}╚════════════════════════════╝${reset}`);
    console.log(`${yellow}1.${reset} ${green}Start New Game${reset}`);
    console.log(`${yellow}2.${reset} ${green}Load Game${reset}`);
    console.log(`${yellow}3.${reset} ${green}Settings / Options${reset}`);
    console.log(`${yellow}4.${reset} ${green}ABOUT${reset}`);
    console.log(`${yellow}5.${reset} ${green}EXIT${reset}`);
  }
}

// Using the class
async function main() {
  const game = new GameSimulation("Super Fun Game");
  
  console.log("\n=== GAME SIMULATION ===\n");
  await game.download();
  console.log("\n=== LOADING GAME BAR ===\n");
  await game.load();
  console.log("\n=== GAME MENU SYSTEM ===\n");
  game.showMenu();
}

main();
