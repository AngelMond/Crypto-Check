// fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
// .then(res => res.json())
// .then(data =>console.log(data))



// let crypto = $('.crypto');

let currentPrice = $('#currentPrice');

const aplicacion = $('#selectCrypto');

fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
.then(res => res.json())
.then(data => {
    data.forEach(token => {
        console.log(token.name)

        var option = $('<option>' + token.name +'</option>')
        aplicacion.append(option);

    });
    //console.log(data)
})

.catch(err => console.log(err))
