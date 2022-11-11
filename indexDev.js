// Adds style.css to the document <head>
window.addEventListener(
  'load',
  (e) => {
    const site1 = {
      id: 'id1',
      name: '4501 DSA Cracker',
      url: 'https://450dsa.com/',
    }
    const site2 = {
      id: 'id2',
      name: 'Algorithm Examples',
      url: 'https://algorithmexamples.com/',
    }
    const site3 = {
      id: 'id3',
      name: 'Codesmith',
      url: 'https://codesmith.io',
    }
    // const site4 = {
    //   id: id4,
    //   name: 'Github',
    //   url: 'https://github.com/',
    // }
    // const site5 = {
    //   id: id5,
    //   name: 'Gists',
    //   url: 'https://gist.github.com/',
    // }
    // const site6 = {
    //   id: id6,
    //   name: 'Immersive Prep Plan',
    //   url: 'https://codesmithdocs.s3-us-west-1.amazonaws.com/Codesmith+Documents/Immersive-Prep-Plan.pdf',
    // }
    const blockedSite = {
      id: 'idBlocked',
      url: 'https://youtube.com',
    }

    // Add link to style.css
    console.log('using indexDev.js')
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
    <div id=${site1.id} class="btn btn-primary">${site1.name}</div>
    <div id=${site2.id} class="btn btn-primary">${site2.name}</div>
    <div id=${site3.id} class="btn btn-primary">${site3.name}</div>
    <div id=${blockedSite.id} class="btn btn-wide">Continue to Page</div>`

    // Query Selectors
    // select divs by id
    const site1Div = document.querySelector(`#${site1.id}`)
    const site2Div = document.querySelector(`#${site2.id}`)
    const site3Div = document.querySelector(`#${site3.id}`)
    const blockedSiteDiv = document.querySelector(`#${blockedSite.id}`)

    // Event Handlers
    // add onclick event to query selected div
    site1Div.addEventListener('click', () => {
      window.location.href = site1.url
    })
    site2Div.addEventListener('click', () => {
      window.location.href = site2.url
    })
    site3Div.addEventListener('click', () => {
      window.location.href = site3.url
    })
    blockedSiteDiv.addEventListener('click', () => {
      window.location.href = blockedSite.url
    })

    // // Add background image
    // const getRandom = async (req, res) => {
    //   const imageData = await fetch(`https://api.unsplash.com/photos/random?client_id=${UNSPLASH_PUBLIC_KEY}&content_filter=high`).json()

    //   if (imageData) {
    //     res.json(imageData)
    //   } else {
    //     res.status(404)
    //     throw new Error('Image not found')
    //   }
    // }
  },
  false
)
