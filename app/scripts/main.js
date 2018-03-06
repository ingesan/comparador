$( document ).ready(function() {

    function getResponses() {
        // Creo array vacio
        var responses = new Array();
        
        //Asigno valores de los input en los campos del array
        responses[0] = $('#hero-form-operator option:selected').text();
        responses[1] = $('#hero-form-plan-type option:selected').text();
        responses[2] = $('#hero-form-plan-budget').val();
        responses[3] = $('#hero-form-plan-minutes').val();
        responses[4] = $('#hero-form-plan-gigas').val();
        
        console.log(responses);
        $('#result-modal').modal('show');
        
    }

    /*
        Steps config
    */

    var settings = {
        /* Appearance */
        // headerTag: 'h1',
        // bodyTag: 'div',
        // contentContainerTag: 'div',
        // actionContainerTag: 'div',
        // stepsContainerTag: 'div',
        // cssClass: 'wizard',
        // stepsOrientation: $.fn.steps.stepsOrientation.horizontal,
    
        // /* Templates */
        // titleTemplate: '<span class='number'>#index#.</span> #title#',
        // loadingTemplate: '<span class='spinner'></span> #text#',
    
        // /* Behaviour */
        // autoFocus: false,
        // enableAllSteps: false,
        // enableKeyNavigation: true,
        // enablePagination: true,
        // suppressPaginationOnFocus: true,
        // enableContentCache: true,
        // enableCancelButton: true,
        // enableFinishButton: true,
        // preloadContent: false,
        // showFinishButtonAlways: false,
        // forceMoveForward: false,
        // saveState: false,
        // startIndex: 0,
    
        // /* Transition Effects */
        // transitionEffect: true,
        // transitionEffectSpeed: 200,
    
        /* Events */
        // onStepChanging: function (event, currentIndex, newIndex) { return true; },
        // onStepChanged: function (event, currentIndex, priorIndex) { }}, 
        // onCanceled: function (event) { },
        // onFinishing: function () {
        //     alert('finish');
        // }, 
        // onFinished: function (event, currentIndex) { 
        //     alert('finish');
        // },
    
        /* Labels */
        // labels: {
        //     cancel: 'Cancel',
        //     current: 'current step:',
        //     pagination: 'Pagination',
        //     finish: 'Finalizar',
        //     next: 'Siguiente',
        //     previous: 'Anterior',
        //     loading: 'Loading ...'
        // }
    };

    $('#wizard').steps({
        enableAllSteps: false,
        transitionEffect: 'fade',
        transitionEffectSpeed: 200,
        onFinished: function (event, currentIndex) { 
            getResponses();
        },
        labels: {
            cancel: 'Cancel',
            current: 'current step:',
            pagination: 'Pagination',
            finish: 'Finalizar',
            next: 'Siguiente',
            previous: 'Anterior',
            loading: 'Loading ...'
        }
    });

    /*
        Range inputs config
    */

    $('#hero-form-plan-minutes').ionRangeSlider(
        {
            min: 0,
            max: 1000,
            from: 500,
            postfix: 'Min'
        }
    );
    $('#hero-form-plan-gigas').ionRangeSlider(
        {
            min: 0,
            max: 15,
            from: 2,
            postfix: 'Gb'
        }
    );
    $('#hero-form-plan-budget').ionRangeSlider({
        min: 10000,
        max: 200000,
        from: 50000,
        prefix: '$'
    });

    /*
        Toggle for side form
    */

    $('#rating-form__tab').click(function() {
        $('#rating-form').toggleClass('active');
    });
   
});
