/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active'); 
  };


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });

    /*==================== sticky navbar ====================*/

        let header = document.querySelector('header');

        header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    
      //  menuIcon.classList.remove('bx-x');
       // navbar.classList.remove('active');
};


/*==================== scroll reveal ====================*/

        ScrollReveal({ 
           // reset: true,
            distance: '80px',
            duration: 2000,
            delay: 200
        });

        ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
        ScrollReveal().reveal('.home-img, .services-container, .portifolio-box, .contact form', { origin: 'bottom' });
        ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
        ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*==================== typed js ====================*/

const typed = new Typed('.mutiple-text', {
    strings: ['Frontend Developer', 'Software Engineer', 'Motorista Profissional'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/*==================== Captura de dados do formulario ====================*/

// Seleciona o formulário

const form = document.getElementById('myForm');

form.addEventListener('submit', (e) => {
  // código para enviar os dados
});

const data = new FormData(form);

fetch('/sendmail', {
    method: 'POST',
    body: data
  });

  app.post('/sendmail', (req, res) => {
    // recebe e processa os dados 
  });

  transporter.sendMail({
    from: 'remetente@email.com',
    to: 'silkmarcelo832@gmail.com', 
    subject: 'Assunto',
    html: `Corpo do email com os dados`
  });