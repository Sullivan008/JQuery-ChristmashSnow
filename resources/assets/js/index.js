var index = {
    
    snowfall: function(){
        $(document).snowfall();
    },

    snowfallClear: function(){
        $(document).snowfall('clear');
    },

    snowfallRounded: function(){
        $(document).snowfall({round: true, minSize: 3, maxSize: 8});
    },

    snowfallShadows: function(){
        $(document).snowfall({shadow: true, flakeCount: 100});
    },

    snowfallRoundedShadows: function(){
        $(document).snowfall({shadow: true, round: true, minSize: 3, maxSize: 8, flakeCount: 100});
    },

    snowfallCollection: function(){
        $(document).snowfall({collection: '.footer-paragraph', flakeCount: 350});
    },

    snowfallImage: function(){
        $(document).snowfall({image: "../images/snowflake.png", minSize: 10, maxSize: 25});
    },

    snowfallDeviceOrientation: function(){
        $(document).snowfall({deviceorientation: true, round: true, minSize: 3, maxSize: 8});
    },
    
    snowfallStart: function(){
        this.snowfall();
    },


    initActions: function(){
        $('.clear').bind('click', function(event){
            index.snowfallClear();
        });

        $('.rounded').bind('click', function(event){
            index.snowfallClear();
            index.snowfallRounded();
        });

        $('.shadows').bind('click', function(event){
            index.snowfallClear();
            index.snowfallShadows();
        });

        $('.rounded-shadows').bind('click', function(event){
            index.snowfallClear();
            index.snowfallRoundedShadows();
        });

        $('.snow-collection').bind('click', function(event){
            index.snowfallClear();
            index.snowfallCollection();
        });

        $('.snow-collection').bind('click', function(event){
            index.snowfallClear();
            index.snowfallCollection();
        });

        $('.images').bind('click', function(event){
            index.snowfallClear();
            index.snowfallImage();
        });

        $('.deviceorientation').bind('click', function(event){
            index.snowfallClear();
            index.snowfallDeviceOrientation();
        });
    },

    initBodyBackground: function(){
        $('body').addClass('body-snow-background');
    },

    init: function(){
        this.initBodyBackground();
        this.initActions();
        this.snowfallStart();
    }
}

$(document).ready(function () {
    index.init();
})