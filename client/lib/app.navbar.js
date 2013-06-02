Template.footerBarTemplate.events({
    'click .sort-completed': function(){
        if(Session.get('sort_workqueues_completed')){
            Session.set('sort_workqueues_completed', false);
            Session.set('sort_workqueues_starred', false);
            Session.set('sort_workqueues_alphabetically', false);
        }else{
            Session.set('sort_workqueues_completed', true);
            Session.set('sort_workqueues_starred', false);
            Session.set('sort_workqueues_alphabetically', false);
        }
        Meteor.flush();
    },
    'click .sort-starred': function(){
        if(Session.get('sort_workqueues_starred')){
            Session.set('sort_workqueues_completed', false);
            Session.set('sort_workqueues_starred', false);
            Session.set('sort_workqueues_alphabetically', false);
        }else{
            Session.set('sort_workqueues_completed', false);
            Session.set('sort_workqueues_starred', true);
            Session.set('sort_workqueues_alphabetically', false);
        }
        Meteor.flush();
    },
    'click .sort-alphabetical': function(){
        if(Session.get('sort_workqueues_alphabetically')){
            Session.set('sort_workqueues_completed', false);
            Session.set('sort_workqueues_starred', false);
            Session.set('sort_workqueues_alphabetically', false);
        }else{
            Session.set('sort_workqueues_completed', false);
            Session.set('sort_workqueues_starred', false);
            Session.set('sort_workqueues_alphabetically', true);
        }
        Meteor.flush();
    },
    'click .tutorial': function(){
        //this just sets a mask over the entire application; useful for testing, but not much else
        //Session.set('show_reactive_overlay', true);
        showTutorialOverlay('#workqueuesPageTutorial');
    },
    'click .webviewer': function(){
        toggleSession('is_dual_panel_layout');
        //showPage('#webBrowserPage');
    }
});

Template.footerBarTemplate.showWebBrowser = function(){
    if(Meteor.Device.isDesktop){
        if(window.innerWidth > 1200){
            return true;
        }
    }else{
        return false;
    }
};
