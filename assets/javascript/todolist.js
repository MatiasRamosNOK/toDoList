//Agrego un evento a los li que se activa cuando el usuario hace click

$("li").click(function(){
    $(this).toggleClass("completado");
})

//Cuando hago click en el span con el texto 'borrar' se elimina el ITEM

$(".spanLeft").click(function(event) {
    $(this).parent().fadeOut(500, function(){
    $(this).remove();});
    event.stopPropagation();
})

// Agregar el contenido del input a la lista
$("input[type='text']").keypress(function(event){
    //filtrar para que sólo se active cuando aprietan Enter
    if(event.key == "Enter") {
      $("ul").append("<li><span class='spanLeft'><i class='fas fa-trash' aria-hidden='true'></i></span> "+ $(this).val() + "<span class='spanRight'><i class='fas fa-check-circle'></i></span>"+"</li>");
      // se borra el contenido del input
      $(this).val("");
      event.stopPropagation();
    }
  });

  // Añadir el efecto de tachado a los items completados
  /*
  $("ul").on("click", "li", function(){
    $(this).toggleClass("completado")
  });
  */
  // Borrar los items completados

  $("ul").on("click", ".spanLeft", function(event){
    $(this).parent().fadeOut(500, function(){
      $(this).remove();
    });
    event.stopPropagation();
  });

  $(".fa-arrows-alt-v").click(function(){
    $("input").slideToggle();
    $("li").slideToggle();
   })

   
   $("ul").on("click", ".spanRight", function(event){
    $(this).parent().on("click", function(){
    $(this).toggleClass("completado")
    });
  });  

  
  $(".fa-check-circle").on("click", function(event){
    $(this).parent().on("click", function(){
        $(this).toggleClass("completado")
        });
        event.stopPropagation();
  })