//Select Tag to append option tag's
const selectCrypto = $('#selectCrypto');
const selectCryptoAlert = $('#selectCryptoAlert');

//Select tag to display the current crypto value
let currentPrice = $('#currentPrice');
var values = 0;

//Select the input to enter the user amount
let userAmount = $('#userAmount');

//Select the modal
let modalForInvalidNumber = $('#defaultModal');

//Select span to append the invest value
let investValue = $('#investValue');

//Select span to append the mexican pesos 
var mexicanPesos = $('#currentPriceMxn');
var conversionDolarToMxn = " ";

//Button to close the modal
let modalButton = $('#modalButton');

//Select divs to show the info when user add a crypto
let dateCoinAdded = $('#dateCoinAdded');
let cryptoCoinAdded = $('#cryptoCoinAdded');
let priceAdded = $('#priceAdded');

//Button to add a crypto
let addCoin = $('#addCoin');



//Event to update automatically the price given for the user in the input- Enter the amount of your actual crypto coins
userAmount.on('keyup', () => {

         if (userAmount.val() >= 0){

         var userNumber = userAmount.val();
         investValue.html(' ');
         investValue.append(new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' }).format(userNumber*values));
         
        //  console.log(values);
     } else {

        //Display the modal if condition pass to the else 
         modalForInvalidNumber.removeClass('hidden');

        //Event to hide the modal
         modalButton.on('click', ()=>{
             modalForInvalidNumber.addClass('hidden');
             userAmount.val('');
            //  console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(values));
         })
         }
    
 })


//This function is when the user select a crypto from the select tag
function displayValue (){

    selectCrypto.change(function(){
        userAmount.val('');
        investValue.html('$0.00')
        values = selectCrypto.val();
        currentPrice.html('');
        currentPrice.append(new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' }).format(values));
        mexicanPesos.html(' ')
        mexicanPesos.append(new Intl.NumberFormat('en-us', { style: 'currency', currency: 'MXN' }).format(conversionDolarToMxn*values));
    });
};

// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com',
//         'X-RapidAPI-Key': '6c37f3f275msh7913bbd983d34f5p1e0db5jsn3a74ed99c007'
//     }
// };
// function getCurrency() {
//     return fetch(
//         "https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=USD&want=MXN&amount=1",
//         options
//     );
// }
// getCurrency()
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         conversionDolarToMxn = data.new_amount;
//         // mexicanPesos.append(conversionDolarToMxn);
//     });

fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
.then(res => res.json())

.then(data => {

    //Set crypto values for card 1
    data.forEach(token => {
       
        var optionElement = $('<option>');
        optionElement.html(token.name);
        optionElement.attr( 'value', token.current_price);
        
        //Append option tag with every crypto name
        selectCrypto.append(optionElement);
    });

    //Set crypto values for card 2
    data.forEach(token => {

        var optionElement = $('<option>');
        optionElement.html(token.name);
        optionElement.attr('value', token.current_price);
        optionElement.attr('name', token.name);
        selectCryptoAlert.append(optionElement);
        
    });

    displayValue ();
  
})
.catch(err => console.log(err));


//My inputs to add coins
var inputAddName = $("#inputAddName");
var inputAddPrice = $("#inputAddPrice");
var inputAddDate = $("#inputAddDate");



//Function to display the Name for the followed crypto
function displayCryptoName(){

    let selectValue = $('#selectCryptoAlert').val();

    //Variable stores the name of every crypto 
    var coinName = $('#selectCryptoAlert option[value="' + selectValue + '"]').html();

    //Set Crypto Name to local storage
    localStorage.setItem('crypto', coinName);
    inputAddName.val(coinName);
    
}


     //Get the Crypto Name from local storage and set it to web
    var localCryptoName = localStorage.getItem('crypto')
    inputAddName.val(localCryptoName);




//Function to display the price for the followed crypto
function displayPriceAdded(){

        //Variable stores the value of the crypto
        var cryptoValue = selectCryptoAlert.val();
        var priceFormated = (new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' }).format(cryptoValue));
        
        //Set Crypto price to local storage
        localStorage.setItem('price', priceFormated);
        inputAddPrice.val(priceFormated);
}



     //Get the price from local storage and set it to web
    var localCryptoPrice = localStorage.getItem('price');
    inputAddPrice.val(localCryptoPrice);




//Function to display the date for the followed crypto
function displayTime (){

    //Variable to store the date
    var date = moment().format('l');

    //Set date to local storage
    localStorage.setItem('date', date);
    inputAddDate.val(date);
}

    //Get the date from local storage and set it to web
    var localDate = localStorage.getItem('date')
    inputAddDate.val(localDate);


//Event to follow a crypto
addCoin.on('click', () =>{
    displayCryptoName();
    displayPriceAdded();
    displayTime();
})


