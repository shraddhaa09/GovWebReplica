// Search Functionality for Financial Advisers
document.getElementById('search').addEventListener('input', function () {
    const filter = this.value.toLowerCase();
    const rows = document.querySelectorAll('#advisers table tbody tr');

    rows.forEach(row => {
        const textContent = row.textContent.toLowerCase();
        row.style.display = textContent.includes(filter) ? '' : 'none';
    });
});

// Smooth Scroll for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
});
