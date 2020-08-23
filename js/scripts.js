const $checkbox = document.getElementById('checkbox')

function mode(event) {
  if (event.target.checked) {
    document.body.classList.remove('dark')
    document.body.classList.add('light')
  } else {
    document.body.classList.remove('light')
    document.body.classList.add('dark')
  }
}

$checkbox.addEventListener('change', mode)
