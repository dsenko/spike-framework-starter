'import $router as app.router';
'import $system as app.system';

app.component.register("TopMenu", {

    global: true,

    init: function () {

        $this.selector.toggleDropdown().click(function(){
            $this.selector.dropdown().slideToggle(200);
        });

        $this.selector.changeLangToEn().click(function(){
            $this.changeLanguage('en');
        });

        $this.selector.changeLangToPl().click(function(){
            $this.changeLanguage('pl');
        });

        $this.selectCurrent($router.getCurrentRoute());

        $router.onRouteChange('topMenu', function(e, currentRoute, currentController){
            $this.selectCurrent(currentRoute);
        });

    },

    changeLanguage: function(lang){
        $system.changeLanguage(lang);
        $this.setLanguageText();
        $this.selector.dropdown().slideUp(200);
    },

    selectCurrent: function(currentRoute){

        if(currentRoute == ''){
            currentRoute = 'home';
        }

        $this.selector.home().removeClass('active');
        $this.selector.posts().removeClass('active');
        $this.selector.about().removeClass('active');

        if($this.selector[currentRoute]){
            $this.selector[currentRoute]().addClass('active');
        }

        $this.selector.dropdown().slideUp(200);

    },

    setLanguageText: function(){
        $this.selector.currentLang().attr('spike-translation', 'language_'+app.config.lang);
    }

});
