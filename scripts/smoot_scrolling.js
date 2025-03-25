
// Smooth scrolling for navigation links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');

        // Check if the link is an anchor link
        if (targetId.startsWith('#')) {
            e.preventDefault(); // Prevent default only for anchor links

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        } else {
            // For external links, apply fade-out effect
            e.preventDefault(); // Prevent default link behavior
            document.body.classList.add('fade-out');

            // Wait for the fade-out transition to complete
            setTimeout(() => {
                window.location.href = targetId; // Navigate to the new page
            }, 400); // Match this duration with the CSS transition duration
        }
    });
});




// // Smooth scrolling for navigation links
// document.querySelectorAll('a.nav-link').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         const targetId = this.getAttribute('href');

//         // Check if the link is an anchor link
//         if (targetId.startsWith('#')) {
//             e.preventDefault(); // Prevent default only for anchor links

//             const targetElement = document.querySelector(targetId);
//             if (targetElement) {
//                 targetElement.scrollIntoView({
//                     behavior: 'smooth',
//                     block: 'start'
//                 });
//             }
//         }
//         // If it's not an anchor link, allow the default behavior
//     });
// });
