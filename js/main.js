let calculator = new Calculator();
URLGET =  "https://jsonplaceholder.typicode.com/posts";

$(document).ready(function() {
    $('#exampleModalToggle').modal('toggle');
});

/* 
userNameStorage = localStorage.getItem('userName');
if(userNameStorage){
    document.getElementById('welcome-title').textContent = `Bienvenid@ a Q´se debe? ${userNameStoragegit }`;
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

/*User name, name and date of the event*/
let eventBtn = document.getElementById('js-btn-ev');
eventBtn.addEventListener('click', eventData);
function eventData() {

    $('#exampleModalToggle').modal('toggle');
    let userName = (document.getElementById('js-user-name').value).toUpperCase();
    calculator.setUserName(userName);
    document.getElementById('js-welcome-title').textContent = `Bienvenid@ a Q´se debe ${userName}`;
    localStorage.setItem('userName', userName);
    
    let eventName = document.getElementById('js-ev-name').value;
    let eventDate = document.getElementById('js-date').value;
    calculator.setEventName(eventName);
    let infoPost = {nombre: eventName, fecha: eventDate}

// Este post simularía un alta en la Base de Datos
    $.post(URLGET, infoPost, (response,state) => { 
        console.log(response, state);
        if(state === "success") {
            document.getElementById('exampleModalToggleLabel2').textContent = `Creaste el evento ${response.nombre} con fecha ${response.fecha}`;
            document.getElementById('js-welcome-subtitle').textContent = `${userName} carga tus gastos para ${response.nombre} (${response.fecha}) `;
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

/*HTML modification using append JQ with effects*/
function addItemHTML(item, type, cost) {
    btnId = calculator.getSpendsLength();
    $('#js-table').append(`
                            <tr class='table-row'>
                                <td>${item}</td> 
                                <td>${type}</td> 
                                <td>${cost}</td> 
                                <td><img id='delete-btn-${btnId}' class='delete-btn' src='image/trash-bin1.png' alt='eliminar'></td>
                            </tr>`
                        );
    /*$('tr:last-child').fadeIn('2000').fadeOut('2000', function(){
        $('tr:last-child').fadeIn('fast');
    });
    */
    $(`#delete-btn-${btnId}`).on("click", function(btnId){
        calculator.removeBalance(btnId);
        document.getElementById('js-cost-subtitle').textContent = `Llevas gastado $${calculator.getBalance()}`;
        $(this).closest("tr").remove(); 
     });
}

/*function addItemHTML(content) {
    $('#js-list-item').append(`<li>${content} <img class='delete-btn' src='image/trash-bin1.png' alt='eliminar'></li>`);
    $('li:last-child').fadeIn('2000').fadeOut('2000', function(){
        $('li:last-child').fadeIn('fast');
    });
    $(".delete-btn").on("click", function(){
        $(this).closest("li").remove(); 
     });
}*/

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

/*Event spends details with JQ*/
$('#js-operation').submit(function addItem(e){
    e.preventDefault();
    let item = $('#js-item').val();
    let type = $('#js-type').val();
    let cost = parseFloat($('#js-cost').val());
    let spend = new Spends(item, type, cost);
    addItemHTML(item, type, cost);
    calculator.addBalance(spend);
    $('#exampleModalToggleTwo').modal('toggle');
    document.getElementById('js-cost-subtitle').textContent = `Llevas gastado $${calculator.getBalance()}`;
    $('#js-item').val('');
    $('#js-type').val('');
    $('#js-cost').val('');

});

/*Function that orders and updates spends*/
function ordenarYActualizar(e){
    calculator.sortSpends(e.target.getAttribute('order'));
    deleteItemsTableHTML();
    let spendsOrdered = calculator.getSpends();
    for (let index = 0; index < spendsOrdered.length ; index++){
        let spend = spendsOrdered[index];
        addItemHTML(spend.getItem(), spend.getType(), spend.getCost());
    }
} 

/*Button can be orders the price of items upwad*/
let orderBtnAsc = document.getElementById('js-btn-asc');
orderBtnAsc.setAttribute('order', 'ASC');
orderBtnAsc.addEventListener('click', ordenarYActualizar);

/*Button can be orders the price of items falling*/
let orderBtnDesc = document.getElementById('js-btn-desc');
orderBtnDesc.setAttribute('order', 'DESC');
orderBtnDesc.addEventListener('click', ordenarYActualizar);

/*Event assistents details*/
let assistantsForm = document.getElementById("js-divide-form")
assistantsForm.addEventListener('submit', divide);
function divide(e) {
    e.preventDefault();
    let person = document.getElementById('js-person').value;
    let balancePerPerson = calculator.paymentPerPerson(person);
    $('#exampleModalToggleLabelFour').modal('toggle');
    document.getElementById('js-person-pay').textContent = `Cada uno pagará $ ${balancePerPerson}.`;
    
}

/*This method removes items table*/
function deleteItemsTableHTML (){
    let tableRow = document.getElementsByClassName('table-row');
    length = tableRow.length
    for (let index = 0; index < length ; index++){
        tableRow[0].remove();
    }
}