fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
.then(res => res.json())
.then(data =>console.log(data))

//Select Tag to append option tag's
const selectCrypto = $('#selectCrypto');

//Select tag to display the current crypto value
let currentPrice = $('#currentPrice');





fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
.then(res => res.json())

.then(data => {

    
    data.forEach(token => {
        // var option = $('<option class="coins" value=" ' + token.current_price+ '">'  + token.name +'</option>');

        var optionElement = $('<option>');

        optionElement.html(token.name);

        optionElement.addClass('coins');

        optionElement.attr('value', token.current_price);
        
        //Append option tag with every crypto name
        selectCrypto.append(optionElement);
<<<<<<< HEAD

=======
>>>>>>> f8d0f93c89cbcf2b7a93e23f1cc014751d4cb47c
        
    });

    selectCrypto.change(function(){
        var valores = selectCrypto.val();
        
        currentPrice.html('');
        currentPrice.append(valores);
        
    })


    
    //console.log(data)

})
.catch(err => console.log(err))

//Select every option tag 

let coins = $('.coins');
    coins.on('click', function(){

        console.log("hola");

});