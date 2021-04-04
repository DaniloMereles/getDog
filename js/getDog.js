const getDog = ()=>{
    const dogBg = document.getElementById('dog__bg')
    const btn = document.getElementById('btn')
    const form = document.getElementById('form')
    const text = document.getElementById('text')
    form.addEventListener('submit', (e)=>{
        e.preventDefault()
    })

    btn.addEventListener('click', ()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(rest => rest.json())
        .then(
            (dog)=>{
                console.log(dog);
                dogBg.innerHTML = 
                `
                    <img src="${dog.message}" class="dog__bg-img"/>
                `
            }
        ).catch(
            text.textContent = 'HAY UN ERROR EN LA PETICION :/'
        ).finally(
            dogBg.innerHTML = 
            `
                <div class="loader">
                    <div class="loader__line"></div>
                </div>
            `
        )
        btn.classList.add('click')
        setTimeout(() => {
            btn.classList.remove('click')
        }, 40);
    })
}
getDog()