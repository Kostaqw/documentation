document.querySelectorAll('.spoiler-header').forEach(function(header) {
    header.addEventListener('click', function() {
        var content = this.nextElementSibling;
        var isVisible = content.style.display === 'block';

        // Toggle the display of the content
        if (isVisible) {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';

            // Calculate the height of the content
            var contentHeight = content.offsetHeight;

            // Scroll the page down by the height of the content
            window.scrollBy({
                top: contentHeight, // Scroll down by the height of the content
                behavior: 'smooth' // Smooth scrolling
            });
        }
    });
});