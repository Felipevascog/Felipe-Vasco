$(document).ready(function(){
    // Función para manejar el evento de clic en el botón
    $('#btnSubmit').click(function(){
      // Obtener la palabra ingresada por el usuario
      var word = $('#inputWord').val();
      
      // Validar si el campo está vacío
      if(word.trim() === ''){
        alert('Por favor ingrese una palabra.');
        return;
      }
      
      // Invertir la palabra ingresada
      var reversedWord = word.split('').reverse().join('');
      
      // Mostrar la palabra ingresada y su inversión en el front-end
      $('#output').html(`<p>Palabra ingresada: ${word}</p><p>Palabra invertida: ${reversedWord}</p>`);
    });
  
    // Función para manejar el evento de clic en el botón de modo oscuro
    $('#btnDarkMode').click(function(){
      // Alternar entre clases de estilo para cambiar entre el modo claro y oscuro
      $('body').toggleClass('dark-mode');
    });
  });
  