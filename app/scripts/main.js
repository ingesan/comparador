$( document ).ready(function() {

    $('#rating-form__tab').click(function() {
        $('#rating-form').toggleClass('active');
    });

    $('#submitForm').click( function() {
        // Creo array vacio
        var responses = new Array();
        
        //Asigno valores de los input en los campos del array
        responses[0] = $( '#exampleFormControlSelect1 option:selected').text();
        responses[1] = $( '#exampleFormControlSelect2 option:selected').text();
        responses[2] = $( '#exampleFormControlSelect3 option:selected').text();
        responses[3] = $( '#exampleFormControlSelect4 option:selected').text();
        
        console.log(responses);
    
    });
   
});
