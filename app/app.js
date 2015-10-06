 var app = angular.module('at', ['pascalprecht.translate']);

      app.config(function ($translateProvider) {
        $translateProvider.useStaticFilesLoader({
          prefix: '/json/',
          suffix: '.json'
        });
        $translateProvider.translations('en', {
          TITLE: 'Hello',
          FOO: 'This is a paragraph.',
          BUTTON_LANG_EN: 'english',
          BUTTON_LANG_DE: 'german'
        });        
        $translateProvider.preferredLanguage('po');
      });

      