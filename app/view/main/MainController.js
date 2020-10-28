/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('modernmaterial.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    DarkModeClick: function (sender, record) {
      Ext.theme.Material.setDarkMode(true);
    },

    LightModeClick: function (sender, record) {
      Ext.theme.Material.setDarkMode(false);
    },

    FashionClick: function (sender, record) {
      //https://www.sencha.com/blog/material-and-css-variables-in-ext-js-6-2/
      Fashion.css.setVariables({"base-color": "red"});
      //Fashion.css.setVariables({"base-color": "#5D4446"}); //brown
      //Fashion.css.setVariables({"base-color": "#2196f3"}); //blue
    },

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
