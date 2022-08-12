const renderProducts = () => {
    const d = document, 
        $container = d.querySelector('.products-container'),
        $fragment = d.createDocumentFragment(),
        products = [
            { title: 'Empanadas Bocatti', src: './assets/products/empanadas-bocatti.jpg' },
            { title: 'Panchos Schneck', src: './assets/products/panchos-schneck.jpg' },
            { title: 'Papas fritas Oerlemans', src: './assets/products/papas-fritas-oerlemans.jpg' },
            { title: 'Empanadas Hamby', src: './assets/products/empanadas-hamby.jpg' },
            { title: 'Milanesas de merluza Artico', src: './assets/products/milanesas-de-merluza-artico.jpg' },
            { title: 'Papas McCain', src: './assets/products/papas-mccain.jpg' },
            { title: 'Jamón cocido extra Schneck', src: './assets/products/jamn-cocido-extra-schneck.jpg' },
            { title: 'Pizza Sibarita', src: './assets/products/pizza-sibarita.jpg' },
            { title: 'Jamón Gran Parma Sarubbi', src: './assets/products/jamn-gran-parma-sarubbi.jpg' }
        ]
    products.forEach(el => {
        const $productContainer = d.createElement('div'),
            $title = d.createElement('h3'),
            $img = d.createElement('img')
        $productContainer.classList.add('col-lg-4', 'item')
        $title.textContent = el.title
        $img.setAttribute('src', el.src)
        $img.setAttribute('alt', el.title)
        $productContainer.appendChild($title)
        $productContainer.appendChild($img)
        $fragment.appendChild($productContainer)
    })
    $container.appendChild($fragment)
}
renderProducts()