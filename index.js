window.addEventListener(
  'load',
  (e) => {
    var link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = './style.css'
    document.head.appendChild(link)
  },
  false
)

const body = document.querySelector('body')
const page = body.parentNode
body.innerHTML = '<div class="text">Hello World</div>'
