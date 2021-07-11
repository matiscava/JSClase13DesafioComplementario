const acordeon = [];
class Acordeon {
    constructor(titulo,contenido){
        this.titulo=titulo;
        this.contenido=contenido;
    }
}
//FUNCIONES
function chequearInputs(){
    $('p.error').remove();
    if($('#tituloItem').val().length===0&&$('#contenidoItem').val().length===0){
        $('#titulo').append(`<p class="error"> Completar Título</p>`);
        $('#contenido').append(`<p class="error"> Completar Contenido</p>`);
    }else if($('#tituloItem').val().length===0){
        $('#titulo').append(`<p class="error"> Completar Título</p>`);
    }else if($('#contenidoItem').val().length===0){
        $('#contenido').append(`<p class="error"> Completar Contenido</p>`);
    }else{
        let titulo = $('#tituloItem').val();
        let contenido =$('#contenidoItem').val();
        const item=new Acordeon(titulo,contenido);
        acordeon.push(item);
        $('#tituloItem').val('');
        $('#contenidoItem').val('');
    }
}
$('#btnGenerarItem').click((evento)=>{
    evento.preventDefault();
    chequearInputs();
    generarAcordeon();
    codigoHtml();
    codigoCss();
    funcionAcordeon();
    codigoJs();
});

function chequearTitulo(){
    $('#titulo p.error').remove();
    if($('#tituloItem').val().length===0){
        $('#titulo').append(`<p class="error"> Completar Título</p>`);
    }
}
function chequearContenido(){
    $('#contenido p.error').remove();
    if($('#contenidoItem').val().length===0){
        $('#contenido').append(`<p class="error"> Completar Contenido</p>`);
    }
}
//GENERAR ACORDEON//

function generarAcordeon(){
    let codigo="";
    $('.acordeon').remove();
    for (const item of acordeon) {
        codigo=codigo.concat(`
        <div class="itemAcordeon">
            <p class="btnItemAcordeon">${item.titulo}</p> 
            <div class="itemContenidoAcordeon">
                <p class="itemTextoAcordeon">${item.contenido}</p>
            </div>
        </div>
        `);
    }
    $('#contenedorAcordeon').append(`
    <div class="acordeon">${codigo}</div>`);
}
//ELIMINAR ACORDEON
$('#btnEliminarAcordeon').click((evento)=>{
    evento.preventDefault();
    acordeon.splice(0,acordeon.length);
    $('div.acordeon').remove();
});
//BORAR TEXTO
$('#btnBorrarTexto').click((evento)=>{
    evento.preventDefault();
    $('p.error').remove();
    $('#tituloItem').val('');
    $('#contenidoItem').val('');
});

//MOSTRAR CODIGO HTML
function codigoHtml(){
    $('#textoCodigoHtml').val('');
    $('#textoCodigoHtml').text($('#contenedorAcordeon').html());
}

//MOSTRAR CODIGO CSS
function codigoCss(){
    $('#textoCodigoCss').val('');
    $('#textoCodigoCss').text(`.acordeon{
        width: 70%;
        margin: 0 auto;
        margin-top: 20px;
        border: 1px solid white;
    }
    
    .btnItemAcordeon{
        background-color: #90ffd1;
        color: rgb(83, 123, 255);
        padding: 8px;
        font-size: 18px;
        font-family:Roboto, Sans-serif;
        font-weight: 600;
        border-top: 1px solid white;
        border-bottom: 1px solid white;
        margin: 0;
        cursor: pointer;
        transition: 0.5s;
    }
    .btnItemAcordeon:hover{
        color: goldenrod;
    }
    
    .btnItemAcordeon.active{
        border-bottom-color: #ff9090;
        color: goldenrod;
    }
    
    .btnItemAcordeon:after{
        content: "+";
        float: left;
        margin-right: 10px;
        font-size: 20px;
    }
    .btnItemAcordeon.active:after{
        content: '-'
    }
    .itemContenidoAcordeon{
        background-color: rgb(158, 214, 188);
        font-family: Roboto, sans-serif;
        overflow:hidden;
        padding: 12px;
        padding-bottom: 18px;
        display:none;
    }
    .itemTextoAcordeon{
        color: gray;
    }
    `);
};

//MOSTRAR CODIGO JS
function codigoJs(){
    $('#textoCodigoJs').val('');
    $('#textoCodigoJs').text(`let btnAcordeon=$('.btnItemAcordeon');

    btnAcordeon.on('click',cambiarClase)

     function cambiarClase(){
            borrarClase();
            $(this).toggleClass('active');
            $(this).next('.itemContenidoAcordeon').slideToggle(2000);
    }
    function borrarClase(){
            btnAcordeon.removeClass('active');
            $('.itemContenidoAcordeon').slideUp(2000);
    }
    `);
}

//copiar al portapaples

function copiarPortapapeles(id,idcontenedor){
    let boton=document.getElementById(id);
    boton.addEventListener("click",(e)=>{
        e.preventDefault();
        copiar(idcontenedor);
    })
}

function copiar(id_elemento) {

    // Crea un campo de texto "oculto"
    aux=document.createElement("input");

    // Asigna el contenido del elemento especificado al valor del campo
    aux.setAttribute("value", $(`#${id_elemento}`).text());

    
    // // Añade el campo a la página
    document.body.appendChild(aux);
    
    // // Selecciona el contenido del campo
    aux.select();
    // // Copia el texto seleccionado
    document.execCommand("copy");
    
    // Elimina el campo de la página
    document.body.removeChild(aux);
    
    console.log("texto copiado")
    }
    
    
copiarPortapapeles('btnCopiarHTML','textoCodigoHtml');
copiarPortapapeles('btnCopiarCSS','textoCodigoCss');
copiarPortapapeles('btnCopiarJS','textoCodigoJs');