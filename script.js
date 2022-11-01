function clickMenu() {
    if(itens.style.display == 'block') {
        itens.style.display = 'none'
        header.style.backgroundColor = 'transparent'
        second.style.display = 'flex'
        thirdtitle.style.display = 'flex'
        third.style.display = 'flex'
        footer.style.display = 'flex'
        seeall.style.display = 'flex'
    } else {
        itens.style.display = 'block'
        header.style.height = '100vh'
        header.style.backgroundColor = 'black'
        second.style.display = 'none'
        thirdtitle.style.display = 'none'
        third.style.display = 'none'
        footer.style.display = 'none'
        seeall.style.display = 'none'
    }
}