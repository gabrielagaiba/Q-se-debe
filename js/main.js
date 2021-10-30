let calculator = new Calculator();
URLGET =  "https://jsonplaceholder.typicode.com/posts";

$( document ).ready(function() {
    $('#exampleModalToggle').modal('toggle');
});

/* 
userNameStorage = localStorage.getItem('userName');
if(userNameStorage){
    document.getElementById('welcome-title').textContent = `Bienvenid@ a Q´se debe ${userNameStoragegit }`;
}
*/

// Bienvenida al Usuario
/*let nameBtn = document.getElementById('js-btn-user');
nameBtn.addEventListener('click', answerClick);
function answerClick() {
    let userName = (document.getElementById('js-user-name').value).toUpperCase();
    calculator.setUserName(userName);
    document.getElementById('welcome-title').textContent = `Bienvenid@ a Q´se debe ${userName}`;
    localStorage.setItem('userName', userName);
}*/

// Nombre usuario, nombre y fecha del evento
let eventBtn = document.getElementById('js-btn-ev');
eventBtn.addEventListener('click', eventData);
function eventData() {

    $('#exampleModalToggle').modal('toggle');
    let userName = (document.getElementById('js-user-name').value).toUpperCase();
    calculator.setUserName(userName);
    document.getElementById('welcome-title').textContent = `Bienvenid@ a Q´se debe ${userName}`;
    localStorage.setItem('userName', userName);
    
    let eventName = document.getElementById('js-ev-name').value;
    let eventDate = document.getElementById('js-date').value;
    calculator.setEventName(eventName);
    let infoPost = {nombre: eventName, fecha: eventDate}

// Este post simularía un alta en la Base de Datoss    
    $.post(URLGET, infoPost, (response,state) => { 
        console.log(response, state);
        if(state === "success") {       
            document.getElementById('exampleModalToggleLabel2').textContent = `Creaste el evento ${response.nombre} con fecha ${response.fecha}`;
        
        }else {
            document.getElementById('exampleModalToggleLabel2').textContent = `Hubo un error al cargar los datos.`;
        }
    });
}


//Modificacion de HTML utilizando appendChild antes de JQ
//function addItemHTML(content) {
    //let ul = document.getElementById('js-list-item');
    //let listAddItem = document.createElement('li');
    //listAddItem.textContent = content; 
   // ul.appendChild(listAddItem);   
//}

//Modificacion de HTML utilizando append JQ con efectos
function addItemHTML(content) {
    $('#js-list-item').append(`<li>${content} <img class='delete-btn' src='image/trash-bin1.png' alt='eliminar'></li>`);
    $('li:last-child').fadeIn('2000').fadeOut('2000', function(){
        $('li:last-child').fadeIn('fast');
    });
    $(".delete-btn").on("click", function(){
        $(this).closest("li").remove(); 
     });
}

//Detalle de gastos del evento antes de JQ
//let addItemForm = document.getElementById("js-operation")
//addItemForm.addEventListener('submit', addItem);
//function addItem(e) {
  //  e.preventDefault();
    //let item = document.getElementById('js-item').value;
   // let cost = parseFloat(document.getElementById('js-cost').value);
    //let type = document.getElementById('js-type').value;
    //et spend = new Spends(item, cost, type);
   // console.log(spend.toString());
    //calculator.addBalance(spend);
    //addItemHTML(spend.toString());
    //document.getElementById('js-balance').textContent = `La suma de tus gastos es: $ ${calculator.getBalance()}`;
    //document.getElementById('js-item').value = '';
    //document.getElementById('js-cost').value = '';
    //document.getElementById('js-type').value = '';
//});

//Detalle de gastos del evento JQ
$('#js-operation').submit(function addItem(e){
    e.preventDefault();
    
    let item = $('#js-item').val();
    console.log(item);
    let cost = parseFloat($('#js-cost').val());
    console.log(cost);
    let type = $('#js-type').val();
    console.log(type);
    $('#exampleModalToggleTwo').modal('toggle');
    let spend = new Spends(item, cost, type);
    console.log(spend.toString());
    calculator.addBalance(spend);
    addItemHTML(spend.toString());    
    $('#js-balance').append = `La suma de tus gastos es: $ ${calculator.getBalance()}`;
    $('#js-item').val('');
    $('#js-cost').val('');
    $('#js-type').val('');
});

//Ordena los gastos ascendentemente
let orderBtnAsc = document.getElementById('js-btn-asc');
orderBtnAsc.addEventListener('click', orderSpends);
function orderSpends() {    
    calculator.sortSpends('ASC');
    document.getElementById('js-order-items').textContent = `El detalle ordenado de tus gastos es: ${calculator.getSpendsString()}`;
}

//Ordena los gastos descendentemente
let orderBtnDesc = document.getElementById('js-btn-desc');
orderBtnDesc.addEventListener('click', orderSpendsDesc);
function orderSpendsDesc() {    
    calculator.sortSpends('DESC');
    document.getElementById('js-order-items').textContent = `El detalle ordenado de tus gastos es: ${calculator.getSpendsString()}`;
}

//Detalle de asistentes al evento
let assistantsForm = document.getElementById("js-divide-form")
assistantsForm.addEventListener('submit', divide);
function divide(e) {
    e.preventDefault();
    let person = document.getElementById('js-person').value;
    let balancePerPerson = calculator.paymentPerPerson(person);
    $('#exampleModalToggleLabelFour').modal('toggle');
    document.getElementById('js-person-pay').textContent = `Cada uno pagará $ ${balancePerPerson}.`;
    
}