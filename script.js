document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-container input');
    const photoItems = document.querySelectorAll('.photo-item');

    searchInput.addEventListener('input', function() {
        const searchText = this.value.trim()

        photoItems.forEach(item => {
            const tags = item.querySelector('img').getAttribute('data-tags')
            if (tags.includes(searchText)) {
                item.style.display = ''; // Show the image if the tag is matched
            } else {
                item.style.display = 'none'; // Hide the image if the tag is not matched
            }
        });
    });
});
