var guardados = new Array;

var show = new Array;
    show[0] =  '<img id="0" src="img/bbva.png" alt="BBVA" onclick="eleccion(0)">';
    show[1] =  '<img id="1" src="img/caixa.png" alt="Caixa" onclick="eleccion(1)">';
    show[2] =  '<img id="2" src="img/cellnex.png" alt="Cellnex" onclick="eleccion(2)">';
    show[3] =  '<img id="3" src="img/ferrovial.png" alt="Ferrovial" onclick="eleccion(3)">';
    show[4] =  '<img id="4" src="img/iberdrola.png" alt="Iberdrola" onclick="eleccion(4)">';
    show[5] =  '<img id="5" src="img/inditex.png" alt="Inditex" onclick="eleccion(5)">';
    show[6] =  '<img id="6" src="img/naturgy.png" alt="Naturgy" onclick="eleccion(6)">'; 
    show[7] =  '<img id="7" src="img/repsol.png" alt="Repsol" onclick="eleccion(7)">';
    show[8] =  '<img id="8" src="img/santander.png" alt="Santander" onclick="eleccion(8)">';
    show[9] =  '<img id="9" src="img/telefonica.png" alt="Telefonica" onclick="eleccion(9)">';

var imagesId = []; //localStorage
var storedImagesId = JSON.parse(localStorage.getItem("imagesId"));

$(function () {
    
    $("#inicio img").draggable({
        revert: "invalid",
        refreshPositions: true,
        drag: function (event, ui) {
            ui.helper.addClass("draggable");
        },
        stop: function (event, ui) {
            ui.helper.removeClass("draggable");
            var image = this.src.split("/")[this.src.split("/").length - 1];

        }
    });

    var x=0;

    $("#fin").droppable({
        drop: function (event, ui) {
            if ($("#fin img").length == 0) {
                $("#fin").html("");
            }
            // console.log(ui.draggable.attr('id'));
            ui.draggable.addClass("dropped");
            $("#fin").append(ui.draggable);
            
            guardados[x] = ui.draggable.attr('id');
            imagesId.push(ui.draggable.attr('id'));

            localStorage.setItem("imagesId", JSON.stringify(imagesId));
            x++;
            guardado();
        }
    });

    ////////////

    $("#inicio img").droppable({
        revert: "invalid",
        refreshPositions: true,
        drop: function (event, ui) {
            ui.helper.addClass("draggable");
        },
        stop: function (event, ui) {
            ui.helper.removeClass("draggable");
            var image = this.src.split("/")[this.src.split("/").length - 1];

        }
    });

    var x=0;

    $("#fin").draggable({
        drag: function (event, ui) {
            if ($("#fin img").length == 0) {
                $("#fin").html("");
            }
            // console.log(ui.draggable.attr('id'));
            ui.draggable.addClass("dropped");
            $("#fin").append(ui.draggable);
            
            guardados[x] = ui.draggable.attr('id');
            imagesId.push(ui.draggable.attr('id'));

            localStorage.setItem("imagesId", JSON.stringify(imagesId));
            x++;
            guardado();
        }
    });

    // $('#borrar').click(function(){
    //     location.reload();
    // });

});


// function borrar(){
//     $(function (){
//         $('#borrar').click(function(){
//             location.reload();
//         });
//     });
// }

function guardado(){
    console.log(guardados);
    const mostrar = document.getElementById('mostrar');
    var toShow = "<style>#mostrar.img{ width: 200%;} </style>"
    toShow += "<button>Seleccionar otra vez</button>" + "<br>";
    
    for(let x=0; x<guardados.length; x++){
        toShow += `<div id='div${guardados[x]}'>`;
        if((x%2)==0){
            toShow += `<div id='div${guardados[x]}'>`;
            toShow += show[guardados[x]] + `<p id='valor${guardados[x]}'>Valor actual</p>`;
            // toShow += '<canvas id="myChart"></canvas>';
            toShow += `</div>` + "<br>";
        }else{
            toShow += `<div id='div${guardados[x]}'>`;
            toShow += show[guardados[x]] + `<p id='valor${guardados[x]}'>Valor actual</p>`;
            toShow += `</div>`;
        }
        
    }

    mostrar.innerHTML = toShow;
    // getValor();
    var intervalID = setInterval(getValor, 500);
}

function getValor(){
    const options = {method: 'GET'};

    fetch('https://projectdb.joseba-andonia1.repl.co/bolsa', options)
    .then(response => response.json())
    .then(response => { response.forEach(element => {

            const van = document.getElementById(`valor${element.id}`);
            if(van != null){
                // console.log(`valor${element.id}`);
                van.innerHTML = `<strong>${element.valor}</strong>`;
            }
            });
    })
    .catch(err => console.error(err));
    
}


// function grafico(){
//         var ctx = document.getElementById("myChart").getContext("2d");
//         var myChart = new Chart(ctx, {
//             type: "bar",
//             data: {
//                 labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//                 datasets: [{
//                     label: "# of Votes",
//                     data: [12, 19, 3, 5, 2, 3],
//                     backgroundColor: [
//                         "rgba(255, 99, 132, 0.2)",
//                         "rgba(54, 162, 235, 0.2)",
//                         "rgba(255, 206, 86, 0.2)",
//                         "rgba(75, 192, 192, 0.2)",
//                         "rgba(153, 102, 255, 0.2)",
//                         "rgba(255, 159, 64, 0.2)"
//                     ],
//                     borderColor: [
//                         "rgba(255, 99, 132, 1)",
//                         "rgba(54, 162, 235, 1)",
//                         "rgba(255, 206, 86, 1)",
//                         "rgba(75, 192, 192, 1)",
//                         "rgba(153, 102, 255, 1)",
//                         "rgba(255, 159, 64, 1)"
//                     ],
//                     borderWidth: 1
//                 }]
//             },
//             options: {
//                 scales: {
//                     y: {
//                         beginAtZero: true
//                     }
//                 }
//             }
//         });
// }


function eleccion(n){
    alert(n);

}

function existeEnArray(numero, guardados) {
    var ToF = false;
    for(let x=0; x< guardados.length; x++){
        if(guardados[x]==numero){
            ToF = true;
        }
    }
    return ToF;
}

function remover(num)
{
    var resultado = existeEnArray(num, guardados);

    console.log(resultado);
}

