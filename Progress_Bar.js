// ========================================
// PROGRAM 6: Progress Bar
// ========================================
// console.log("\n=== PROGRAM 6: Progress Bar ===\n");
async function program6_progressBar() {
  const green = '\x1b[32m';
  const reset = '\x1b[0m';
  
  function showProgress(percent, label) {
    const filled = Math.floor(percent / 2);
    const empty = 50 - filled;
    const bar = '█'.repeat(filled) + '░'.repeat(empty);
    process.stdout.write(`\r${green}${bar}${reset} ${percent}% - ${label}`);
  }
  
  console.log("Downloading necessary files...");
  
  for (let i = 0; i <= 100; i += 10) {
    showProgress(i, "Please wait...");
    await new Promise(resolve => setTimeout(resolve, 200));
  }
  
  console.log("\n✓ Download complete!");
}
// Uncomment to run (it has a delay):
// program6_progressBar();

// LOADING GAME
// console.log("\n=== LOADING GAME BAR ===\n");
async function GameLoading() {
  const yellow = '\x1b[33m';
  const reset = '\x1b[0m';

  // this code show the loading progress
  function loadingProgress(percentage, labels){
    const filled = Math.floor(percentage / 2);
    const empty = 50 - filled;
    const bar = '█'.repeat(filled) + '░'.repeat(empty);
    process.stdout.write(`\r${yellow}${bar}${reset} ${percentage}% - ${labels}`);
  }

  console.log("Loading game...");

  // this code increase the progress by 10% each time
  for (let i = 0; i <= 100; i ++) {

    // this code calls the function that draws the progress bar
    loadingProgress(i, "Please wait...");

    // this pause the code before the next update
    await new Promise(resolve => setTimeout(resolve, 200));
  }

  console.log("\n✓ Loading complete, Tap to start!");
}
// GameLoading()


async function main() {
  console.log("\n=== PROGRAM 6: Progress Bar ===\n");
  await program6_progressBar();
  console.log("\n"); // spacing
  console.log("\n=== LOADING GAME BAR ===\n");
  await GameLoading();
}

main();
