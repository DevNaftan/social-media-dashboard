const $checkbox = document.getElementById('checkbox')

function mode(event) {
  if (event.target.checked) {
    document.body.classList.remove('light')
    document.body.classList.add('dark')
  } else {
    document.body.classList.add('light')
    document.body.classList.remove('dark')
  }
}

$checkbox.addEventListener('change', mode)
