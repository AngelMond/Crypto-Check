//Select Tag to append option tag's
const selectCrypto = $('#selectCrypto');
const selectCryptoAlert = $('#selectCryptoAlert');

//Select tag to display the current crypto value
let currentPrice = $('#currentPrice');
var valores = 0;

//Select the input to enter the user amount
let userAmount = $('#userAmount');

//Select the modal
let modalForInvalidNumber = $('#defaultModal')

//Select span to append the invest value
let investValue = $('#investValue');

//Select span to append the mexican pesos 
let mexicanPesos = $('#currentPriceMxn');

//Button to close the modal
let modalButton = $('#modalButton');



userAmount.on('keyup', () => {

        if (userAmount.val() >= 0){

        var prueba = userAmount.val();
        investValue.html('$');
        investValue.append(prueba*valores);

    } else {

        modalForInvalidNumber.removeClass('hidden');
        modalButton.on('click', ()=>{
            modalForInvalidNumber.addClass('hidden');
            userAmount.val('');
        })
        }
    
})


//This function is when the user select a crypto from the select tag
function displayValue (){

    selectCrypto.change(function(){
        userAmount.val('');
        investValue.html('$0.00')
        valores = selectCrypto.val();
        currentPrice.html('$');
        currentPrice.append(valores);
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



