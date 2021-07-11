//evento acordeones/
function funcionAcordeon(){
let btnAcordeon=$('.btnItemAcordeon');

    btnAcordeon.on('click',cambiarClase)

     function cambiarClase(){
         if($(this).hasClass('active')){
            borrarClase();
         }else{
             borrarClase();
             $(this).toggleClass('active');
             $(this).next('.itemContenidoAcordeon').slideToggle(2000);
            }
    }
    function borrarClase(){
            btnAcordeon.removeClass('active');
            $('.itemContenidoAcordeon').slideUp(2000);
    }
}

