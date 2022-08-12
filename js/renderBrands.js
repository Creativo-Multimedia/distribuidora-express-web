const renderBrands = () => {
    const d = document, 
        $container = d.querySelector('.brands-container'),
        $fragment = d.createDocumentFragment(),
        brands = [
            { title: 'Artico', src: './assets/brands/artico.png' },
            { title: 'Hamby', src: './assets/brands/hamby.png' },
            { title: 'Mccain', src: './assets/brands/mccain.png' },
            { title: 'Oerlemans', src: './assets/brands/oerlemans.png' },
            { title: 'Sarubbi', src: './assets/brands/sarubbi.png' },
            { title: 'Schneck', src: './assets/brands/schneck.png' }
        ]
    brands.forEach(el => {
        const $brandContainer = d.createElement('div'),
            $img = d.createElement('img')
        $brandContainer.classList.add('col-6', 'col-sm-4', 'col-md-2', 'item')
        $img.setAttribute('src', el.src)
        $img.setAttribute('alt', el.title)
        $brandContainer.appendChild($img)
        $fragment.appendChild($brandContainer)
    })
    $container.appendChild($fragment)
}
renderBrands()