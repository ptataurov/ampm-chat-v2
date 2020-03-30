import Swiper from 'swiper'

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 32,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    observer: true,
    observeParents: true,
    breakpoints: {
      600: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1000: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }
  })

  $('._btn').click(function() {
    const $this = $(this)
    const name = $this.data('name')
    const title = $this.data('title')

    $('._title').html(title)

    const tabs = $('._tab')
    tabs.addClass('hidden')
    $(`[data-name="${name}"]`).removeClass('hidden')

    const btns = $('._btn')
    btns.removeClass('active')
    $this.addClass('active')
  })
})
