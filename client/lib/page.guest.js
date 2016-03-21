// Creative Commons License. (c) 2013 pentasyllabic.com
// Attribution + Noncommercial + NoDerivatives
// http://creativecommons.org/licenses/by-nc-nd/3.0/



Template.guestPageTemplate.events({
    'click .synopsis-tab': function(){
        $('.card-container').addClass('hidden');
        $('.synopsis').removeClass('hidden');
        $('#currentScreenshotContainer').removeClass('hidden');
    },
    'click .features-tab': function(){
        $('.card-container').addClass('hidden');
        $('.features').removeClass('hidden');
    },
    'click .eula-tab': function(){
        $('.card-container').addClass('hidden');
        $('.eula').removeClass('hidden');
    },
    'click .privacy-tab': function(){
        $('.card-container').addClass('hidden');
        $('.privacy-policy').removeClass('hidden');
    },

    'click .accounts-tab': function(){
        $('.card-container').addClass('hidden');
        $('.accounts').removeClass('hidden');
    },
    'click .betatest-tab': function(){
        $('.card-container').addClass('hidden');
        $('.betatest').removeClass('hidden');
    },
    'click .all-tab': function(){
        $('.card-container').removeClass('hidden');
    }
});
