// Adds style.css to the document <head>
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

// Selectors
const body = document.querySelector('body')
const page = body.parentNode

// HTML Injectors
body.innerHTML = `<main class="container">
<div class="btn btn-primary"><a href="http://"></a>Link</div>
<div class="btn btn-primary"><a href="http://"></a>Link</div>
<div class="btn btn-primary"><a href="http://"></a>Link</div>
<div class="btn btn-primary"><a href="http://"></a>Link</div>
<div class="btn btn-primary"><a href="http://"></a>Link</div>
<div class="btn btn-primary"><a href="http://"></a>Link</div>
<div class="btn btn-wide"><a href="http://"></a>Continue</div>
</main>`
