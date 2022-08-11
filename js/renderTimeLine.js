const d = document

const renderTimeLine = () => {
    const $container = d.querySelector('.time-line-container'),
        $fragment = d.createDocumentFragment(),
        images = [
            './assets/construction/distribuidora express obra (1).jpg',
            './assets/construction/distribuidora express obra (2).jpg',
            './assets/construction/distribuidora express obra (3).jpg',
            './assets/construction/distribuidora express obra (4).jpg',
            './assets/construction/distribuidora express obra (5).jpg',
            './assets/construction/distribuidora express obra (6).jpg',
            './assets/construction/distribuidora express obra (7).jpg',
            './assets/construction/distribuidora express obra (8).jpg',
            './assets/construction/distribuidora express obra (9).jpg',
            './assets/construction/distribuidora express obra (10).jpg',
            './assets/construction/distribuidora express obra (11).jpg',
            './assets/construction/distribuidora express obra (12).jpg',
            './assets/construction/distribuidora express obra (13).jpg',
            './assets/construction/distribuidora express obra (14).jpg',
            './assets/construction/distribuidora express obra (15).jpg',
            './assets/construction/distribuidora express obra (16).jpg',
            './assets/construction/distribuidora express obra (17).jpg',
            './assets/construction/distribuidora express obra (18).jpg',
            './assets/construction/distribuidora express obra (19).jpg',
            './assets/construction/distribuidora express obra (20).jpg',
            './assets/construction/distribuidora express obra (21).jpg',
            './assets/construction/distribuidora express obra (22).jpg',
            './assets/construction/distribuidora express obra (23).jpg',
            './assets/construction/distribuidora express obra (24).jpg',
            './assets/construction/distribuidora express obra (25).jpg',
        ]
    images.forEach(el => {
        const $img = d.createElement('img'),
            $line = d.createElement('div')
        $line.classList.add('line')
        $img.setAttribute('src', el)
        $img.setAttribute('alt', 'Construcción de local Distribuidora Express Sarandí Grande')
        $fragment.appendChild($line)
        $fragment.appendChild($img)
    })
    $container.appendChild($fragment)
}
renderTimeLine()