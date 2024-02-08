document.addEventListener("DOMContentLoaded", function() {
    let panes = document.getElementById('panes');
    
    panes.addEventListener('click', function(event) {
        if (event.target.classList.contains('remove-button')) {
            let paneItem = event.target.parentElement;
            panes.removeChild(paneItem);
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let panes2 = document.getElementById('panes__2');
    
    panes2.addEventListener('click', function(event) {
        if (event.target.classList.contains('remove-button')) {
            let paneItem = event.target.parentElement;
            panes2.removeChild(paneItem);
        }
    });
});