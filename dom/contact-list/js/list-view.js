const container = document.getElementById('container');
document.querySelector('.list-view').addEventListener('click', (event) => {
    let target = null;
    if (event.target.tagName === 'LI') {
        target = event.target;
    }
    if (event.target.parentNode.tagName === 'LI') {
        target = event.target.parentNode;
    }

    if (target) {
        target.classList.add('active');
        document.getElementById('card-email').innerHTML = target.dataset.email;
        document.getElementById('card-phone').innerHTML = target.dataset.phone;
        container.classList.add('details');
    }
});

document.querySelector('.back').addEventListener('click', () => {
    container.classList.remove('details');
    const items = document.querySelectorAll('.list-view li');
    for (let item of items) {
        item.classList.remove('active');
    }
});
