// fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
// .then(res => res.json())
// .then(data =>console.log(data))



// let crypto = $('.crypto');


const aplicacion = document.querySelector('.crypto')

fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
.then(res => res.json())
.then(data => {
    data.forEach(token => {
        console.log(token.name)

        
        const p = document.createElement('p')
        p.innerHTML = token.name
        aplicacion.appendChild(p)

    });
    //console.log(data)
})

.catch(err => console.log(err))
