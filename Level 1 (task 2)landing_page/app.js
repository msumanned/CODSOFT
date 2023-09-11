let sections = document.querySelectorAll('section');
let menu_lists = document.querySelectorAll('.nav-content ul li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            menu_lists.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.nav-content ul li a[href*= '+ id +']').classList.add('active');
            });
        }
    });
};

