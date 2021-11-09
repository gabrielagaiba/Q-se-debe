let calculator = new Calculator();
URLGET =  "https://jsonplaceholder.typicode.com/posts";
// Get user name, event name and event date to local storage
$(document).ready(function() {
    $('#exampleModalToggle').modal('toggle');
    if (localStorage.getItem('userName')){
        document.getElementById('js-user-name').value = localStorage.getItem('userName');
    }
    if (localStorage.getItem('eventName')){
        document.getElementById('js-ev-name').value = localStorage.getItem('eventName');
    }
    if (localStorage.getItem('eventDate')){
        document.getElementById('js-date').value = localStorage.getItem('eventDate');
    }
});

// User name value, name and date of the event value
let eventBtn = document.getElementById('js-btn-ev');
eventBtn.addEventListener('click', function() {
    $('#exampleModalToggle').modal('toggle');
    let userName = document.getElementById('js-user-name').value;
    let eventName = document.getElementById('js-ev-name').value;
    let eventDate = document.getElementById('js-date').value;
    calculator.setUserName(userName);
    calculator.setEventName(eventName);
    document.getElementById('js-welcome-title').textContent = `Bienvenid@ a Q´se debe ${userName.toUpperCase()}`;
    // Set user name, event name and event date to Local storage
    localStorage.setItem('userName', userName);
    localStorage.setItem('eventName', eventName);
    localStorage.setItem('eventDate', eventDate);
    let infoPost = {nombre: eventName, fecha: eventDate}
    // This post wouls simulate a registration in the Database
    $.post(URLGET, infoPost, (response,state) => { 
        console.log(response, state);
        if(state === "success") {
            document.getElementById('exampleModalToggleLabel2').textContent = `Creaste el evento ${response.nombre} con fecha ${response.fecha}`;
            document.getElementById('js-welcome-subtitle').textContent = `${userName.toUpperCase()} carga tus gastos para ${response.nombre} (${response.fecha}) `;
        }else {
            document.getElementById('exampleModalToggleLabel2').textContent = `Hubo un error al cargar los datos.`;
        }
    });
});

// Event spends details with JQ
$('#js-operation').submit(function(e){
    e.preventDefault();
    $('#exampleModalToggleTwo').modal('toggle');
    let item = $('#js-item').val();
    let type = $('#js-type').val();
    let cost = parseFloat($('#js-cost').val());
    let spend = new Spends(item, type, cost);
    addItemHTML(item, type, cost, calculator.getSpendsLength());
    calculator.addSpend(spend);
    updateBalanceHTML();
    document.getElementById('js-person-pay').textContent = '';
    $('#js-item').val('');
    $('#js-type').val('');
    $('#js-cost').val('');
});

function updateBalanceHTML(){
    document.getElementById('js-cost-subtitle').textContent = `Llevas gastado $${calculator.getBalance()}`;
    $('#js-cost-subtitle').fadeIn('2000').fadeOut('2000', function(){
        $('#js-cost-subtitle').fadeIn('fast');
    });
}

// This method add all <tr> items to table
function addItemHTML(item, type, cost, index) {
    $('#js-table').append(`
        <tr class='table-row'>
            <td>${item}</td> 
            <td>${type}</td> 
            <td>${cost}</td> 
            <td><img class='delete-btn' src='image/trash-bin1.png' alt='eliminar' onclick='deleteElement(${index})'></td>
        </tr>`
    );
}

// This method set addItemHTML to table
function addItemsTableHTML(){
    let spends = calculator.getSpends();
    for (let index = 0; index < spends.length ; index++){
        let spend = spends[index];
        addItemHTML(spend.getItem(), spend.getType(), spend.getCost(), index);
    }
}

// This method removes all <tr> items from table
function deleteItemsTableHTML (){
    let tableRow = document.getElementsByClassName('table-row');
    while (tableRow[0]){
        tableRow[0].remove();
    }
}

function deleteElement(id){
    // Remove all <tr> elements from table
    deleteItemsTableHTML();
    // Remove spend from spends array, using ID as index
    calculator.removeSpend(id);
    // Add again all spends to table
    addItemsTableHTML();    
    updateBalanceHTML();
    document.getElementById('js-person-pay').textContent = '';
}

//Button can be orders the price of items upwad
let orderBtnUpwad = document.getElementById('js-btn-upwad');
orderBtnUpwad.setAttribute('order', 'UP');
orderBtnUpwad.addEventListener('click', orderSpendsAndUpdate);

// Button can be orders the price of items falling
let orderBtnFalling = document.getElementById('js-btn-falling');
orderBtnFalling.setAttribute('order', 'FALL');
orderBtnFalling.addEventListener('click', orderSpendsAndUpdate);

// Function that orders and updates spends
function orderSpendsAndUpdate(e){
    // Remove all <tr> elements from table
    deleteItemsTableHTML();
    // Order spends array, using order given by button
    calculator.sortSpends(e.target.getAttribute('order'));
     // Add again all spends to table
     addItemsTableHTML();
} 

// Event assistents details 
let assistantsForm = document.getElementById("js-divide-form")
assistantsForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let person = document.getElementById('js-person').value;
    $('#exampleModalToggleLabelFour').modal('toggle');
    document.getElementById('js-person-pay').textContent = `Cada uno pagará $ ${calculator.paymentPerPerson(person)}.`;
    $('#js-person-pay').fadeIn('2000').fadeOut('2000', function(){
        $('#js-person-pay').fadeIn('fast');
    });
});