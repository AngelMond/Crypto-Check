fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
.then(res => res.json())
.then(data =>console.log(data))

//Select Tag to append option tag's
const selectCrypto = $('#selectCrypto');

//Select tag to display the current crypto value
let currentPrice = $('#currentPrice');
var valores = 0;

var userQuantityComponent = $('#userAmount');
var userQuantity = userQuantityComponent.val();


function totalValue (){
    var investValue = $('#investValue');
    var prueba = $('#userAmount').val();
    console.log(prueba);
    investValue.html('$');
    investValue.append(prueba*valores);
    // console.log(prueba*valores);
};



fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
.then(res => res.json())

.then(data => {

    
    data.forEach(token => {
        // var option = $('<option class="coins" value=" ' + token.current_price+ '">'  + token.name +'</option>');

        var optionElement = $('<option>');

        optionElement.html(token.name);

        optionElement.addClass('coins');

        optionElement.attr( 'value', token.current_price);
        
        //Append option tag with every crypto name
        selectCrypto.append(optionElement);
        
    });

    selectCrypto.change(function(){
        valores = selectCrypto.val();
        
        currentPrice.html('$');
        currentPrice.append(valores);
        totalValue();
    })


    
    //console.log(data)

})
.catch(err => console.log(err))

