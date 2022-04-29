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
var mexicanPesos = $('#currentPriceMxn');
var conversionDolarToMxn = " ";

//Button to close the modal
let modalButton = $('#modalButton');




userAmount.on('keyup', () => {

         if (userAmount.val() >= 0){

         var prueba = userAmount.val();
         investValue.html(' ');
         investValue.append(new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' }).format(prueba*valores));
         console.log(new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' }).format(valores));
        //  console.log(valores);
     } else {

         modalForInvalidNumber.removeClass('hidden');
         modalButton.on('click', ()=>{
             modalForInvalidNumber.addClass('hidden');
             userAmount.val('');
            //  console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(valores));
         })
         }
    
 })


//This function is when the user select a crypto from the select tag
function displayValue (){

    selectCrypto.change(function(){
        userAmount.val('');
        investValue.html('$0.00')
        valores = selectCrypto.val();
        currentPrice.html('');
        currentPrice.append(new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' }).format(valores));
        mexicanPesos.html(' ')
        mexicanPesos.append(new Intl.NumberFormat('en-us', { style: 'currency', currency: 'MXN' }).format(conversionDolarToMxn*valores));
    });
};

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com',
        'X-RapidAPI-Key': '6c37f3f275msh7913bbd983d34f5p1e0db5jsn3a74ed99c007'
    }
};
function getCurrency() {
    return fetch(
        "https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=USD&want=MXN&amount=1",
        options
    );
}
getCurrency()
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data.new_amount);
        conversionDolarToMxn = data.new_amount;
        // mexicanPesos.append(conversionDolarToMxn);

        console.log(currentPrice);
    });

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



