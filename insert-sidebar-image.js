document.addEventListener("DOMContentLoaded", function() {
    var sidebar = document.querySelector('.book-summary');
    if (sidebar) {
        var imgElement = document.createElement('img');
        imgElement.id = 'toc-sidebar-image';
        imgElement.src = 'images/A5.jpg';
        imgElement.alt = 'Aziz';
        sidebar.insertBefore(imgElement, sidebar.firstChild);
    }
});




