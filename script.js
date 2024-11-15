// const words = document.querySelectorAll('.hover-word');

// words.forEach(word => {
//     word.addEventListener('mouseenter', (event) => {
//         const listId = event.target.getAttribute('data-list');
//         const list = document.getElementById(listId);
//         list.style.display = 'block';
//     });

//     word.addEventListener('mouseleave', (event) => {
//         const listId = event.target.getAttribute('data-list');
//         const list = document.getElementById(listId);
//         list.style.display = 'none';
//     });
// });



const words = document.querySelectorAll('.hover-word');

words.forEach(word => {
    word.addEventListener('mouseenter', (event) => {
        const listId = event.target.getAttribute('data-list');
        const list = document.getElementById(listId);
        list.style.display = 'block';
    });

    word.addEventListener('mouseleave', (event) => {
        const listId = event.target.getAttribute('data-list');
        const list = document.getElementById(listId);
        list.style.display = 'none';
    });
});