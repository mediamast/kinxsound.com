// document.addEventListener("DOMContentLoaded", () => {
//     const columns = 16;
//     const rows = 5;
//     const speed = 200; // Adjust for smoother animation speed

//     const grid = document.querySelector(".equalizer-grid");
//     if (!grid) {
//         console.error("Equalizer grid not found");
//         return;
//     }

//     const blocks = Array.from(grid.children);

//     function getBlock(col, row) {
//         const index = row * columns + col;
//         return blocks[index] || null; // Return null if the index is out of range
//     }

//     function randomizeEqualizer() {
//         let previousHeight = Math.floor(Math.random() * 5) + 1; // Random initial height between 1 and 5

//         for (let col = 0; col < columns; col++) {
//             let variation = Math.floor(Math.random() * 3) - 1; // Variation between -1, 0, and +1
//             let visibleHeight = Math.max(1, Math.min(5, previousHeight + variation)); // Ensure between 1 and 5
//             previousHeight = visibleHeight; // Store for next column to create wave effect

//             for (let row = 0; row < rows - 1; row++) { // Exclude bottom row from animation
//                 const block = getBlock(col, row);
//                 if (block) {
//                     block.style.transition = "opacity 0.3s ease-in-out";
//                     block.style.opacity = rows - row <= visibleHeight ? "1" : "0";
//                 }
//             }
//         }
//     }

//     function loopAnimation() {
//         randomizeEqualizer();
//         setTimeout(loopAnimation, speed);
//     }

//     loopAnimation();
// });

