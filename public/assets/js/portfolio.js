if (typeof window !== 'undefined') {
  // browser code
  $(document).ready(function () {
    $(window).scroll(function () {
      // sticky navbar on scroll script
      if (this.scrollY > 20) {
        $('.navbar').addClass('sticky')
      } else {
        $('.navbar').removeClass('sticky')
      }

      // scroll-up button show/hide script
      if (this.scrollY > 500) {
        $('.scroll-up-btn').addClass('show')
      } else {
        $('.scroll-up-btn').removeClass('show')
      }
    })

    // slide-up script
    $('.scroll-up-btn').click(function () {
      $('html').animate({ scrollTop: 0 })
      // removing smooth scroll on slide-up button click
      $('html').css('scrollBehavior', 'auto')
    })

    $('.navbar .menu li a').click(function () {
      // applying again smooth scroll on menu items click
      $('html').css('scrollBehavior', 'smooth')
    })

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
      $('.navbar .menu').toggleClass('active')
      $('.menu-btn i').toggleClass('active')
    })

    // typing text animation script React,Node,PHP,Wordpress,CodeIgniter
    if ($('.typing').length > 0) {
      var typed = new Typed('.typing', {
        strings: [
          'JavaScript',
          'React/Node',
          'PHP',
          'Wordpress',
          'CodeIgniter',
          'C# etc...',
        ],
        //strings: ['YouTuber', 'Developer', 'Blogger', 'Designer', 'Freelancer'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
      })
    }

    if ($('.typing-2').length > 0) {
      var typed = new Typed('.typing-2', {
        strings: [
          'a FullStack Software Developer',
          'Over 10 years of experience',
          'Good at JavaScript (React/Nextjs/Node)',
          'use PHP (CodeIgniter) & C# etc...',
        ],
        //strings: ['YouTuber', 'Developer', 'Blogger', 'Designer', 'Freelancer'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
      })
    }

    // owl carousel script
    if ($('.carousel').length > 0) {
      $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1,
            nav: false,
          },
          600: {
            items: 2,
            nav: false,
          },
          1000: {
            items: 3,
            nav: false,
          },
        },
      })
    }
  })
}
