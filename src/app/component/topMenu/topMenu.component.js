app.component.register("TopMenu", {

    global: true,

    init: function () {

        var self = this;

        self.selector.toggleDropdown().click(function(){
            self.selector.dropdown().slideToggle(200);
        });

        self.selector.changeLangToEn().click(function(){
            app.system.changeLanguage('en');
            self.setLanguageText();
        });

        self.selector.changeLangToPl().click(function(){
            app.system.changeLanguage('pl');
            self.setLanguageText();
        });

        self.selectCurrent(app.router.getCurrentRoute());

        app.router.onRouteChange('topMenu', function(e, currentRoute, currentController){
            app.component.TopMenu.selectCurrent(currentRoute);
            self.selector.dropdown().slideUp(200);
        });

    },


    selectCurrent: function(currentRoute){

        if(currentRoute == ''){
            currentRoute = 'home';
        }

        this.selector.home().removeClass('active');
        this.selector.posts().removeClass('active');
        this.selector.about().removeClass('active');

        if(this.selector[currentRoute]){
            this.selector[currentRoute]().addClass('active');
        }

    },

    setLanguageText: function(){
        this.selector.currentLang().attr('spike-translation', 'language_'+app.config.lang);
    }

});
