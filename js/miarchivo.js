const URLJSON = '../data.json'

$('header').append('<button id="btnJSON" class="button-form" >Traer datos de JSON</button>');
$('#btnJSON').click(() => {
    $.getJSON(URLJSON, function(response, state) {
        if(state === 'success') {
            let myData = response;
            console.log(response);
            for (const dato of myData) {
                
            console.log(dato.Compras)
                $('header').append (`
                    <div>
                        <h3>${dato.Nombre}</h3>
                        <p>${dato.Evento}</>
                        <p>${dato.Fecha}</>
                        <p>${JSON.stringify(dato.Compras)}</>
                        <p>${dato.Participantes}</>
                    </div>`)
            }
        }
    });
});