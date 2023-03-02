let navItems = document.querySelectorAll('.item')
let menu = document.querySelectorAll('.menu')

navItems.forEach((e, i) => {
  e.addEventListener('click', () => {
    navItems.forEach((el, ind) => {
      menu[ind].classList.remove('active')
      el.classList.remove('active')
    })
    if (e == navItems[i]) {
      if (menu[i].classList.contains('active')) return
      menu[i].classList.add('active')
    }
    e.classList.add('active')
  })
})