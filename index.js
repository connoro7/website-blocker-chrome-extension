// Adds style.css to the document <head>
window.addEventListener(
  'load',
  (e) => {
    // Add link to style.css
    var link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = './style.css'
    document.head.appendChild(link)

    // Logic for replacing website body with our app
    var body = document.querySelector('body')
    var main = document.createElement('main')
    body.innerHTML = ''
    document.body.appendChild(main)
    main.innerHTML = `
    <div class="btn btn-primary"><a href="http://"></a>Link</div>
    <div class="btn btn-primary"><a href="http://"></a>Link</div>
    <div class="btn btn-primary"><a href="http://"></a>Link</div>
    <div class="btn btn-primary"><a href="http://"></a>Link</div>
    <div class="btn btn-primary"><a href="http://"></a>Link</div>
    <div class="btn btn-primary"><a href="http://"></a>Link</div>
    <div class="btn btn-wide"><a href="http://"></a>Continue</div>`
  },
  false
)
