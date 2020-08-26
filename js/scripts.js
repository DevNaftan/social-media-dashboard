const $checkbox = document.getElementById('checkbox')

function theme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'light')
  } else {
    document.documentElement.setAttribute('data-theme', 'dark')
  }
}

$checkbox.addEventListener('change', theme)
