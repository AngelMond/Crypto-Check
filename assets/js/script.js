fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
.then(res => res.json())
.then(data =>console.log(data))

//Select Tag to append option tag's
const selectCrypto = $('#selectCrypto');

//Select tag to display the current crypto value
let currentPrice = $('#currentPrice');

//Select every option tag 
let optionTag = document.getElementsByTagName('option');

fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
.then(res => res.json())
.then(data => {

    data.forEach(token => {
        var option = $('<option>' + token.name +'</option>');

        //Append option tag with every crypto name
        selectCrypto.append(option);
    });
    //console.log(data)
})

.catch(err => console.log(err))
