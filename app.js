/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'modernmaterial.Application',

    name: 'modernmaterial',

    requires: [
        // This will automatically load all classes in the modernmaterial namespace
        // so that application classes do not need to require each other.
        'modernmaterial.*'
    ],

    // The name of the initial view to create.
    mainView: 'modernmaterial.view.main.Main'
});
