//Select Tag to append option tag's
const selectCrypto = $('#selectCrypto');
const selectCryptoAlert = $('#selectCryptoAlert');

//Select tag to display the current crypto value
let currentPrice = $('#currentPrice');
var valores = 0;

function totalValue (){
    if ($('#userAmount').val() >= 0){
    var investValue = $('#investValue');
    var prueba = $('#userAmount').val();
    investValue.html('$');
    investValue.append(prueba*valores);
} else {
    var investValue = $('#investValue');
    var prueba = $('#userAmount').val();
    alert ("Por favor ingrese un valor mayor a 0");
    investValue.html('$');
    investValue.append(0*valores);
    }
};


function displayValue (){
    selectCrypto.change(function(){
        valores = selectCrypto.val();
        currentPrice.html('$');
        currentPrice.append(valores);
        totalValue();
    });
};


fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
.then(res => res.json())

.then(data => {

    data.forEach(token => {
       
        var optionElement = $('<option>');
        optionElement.html(token.name);
        optionElement.attr( 'value', token.current_price);
        
        //Append option tag with every crypto name
        selectCrypto.append(optionElement);
    });

    data.forEach(token => {

        var optionElement = $('<option>');
        optionElement.html(token.name);
        selectCryptoAlert.append(optionElement);

    });

    displayValue ();
  
})
.catch(err => console.log(err));

