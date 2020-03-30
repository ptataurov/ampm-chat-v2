$(() => {
  $('._nav-link').click(function() {
    const $this = $(this)

    const href = $this.data('href')

    $('html, body').animate(
      {
        scrollTop: $(`[data-target='${href}']`)
          .not($this)
          .offset().top
      },
      400
    )
  })
})
