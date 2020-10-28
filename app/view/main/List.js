/**
 * This view is an example list of people.
 */
Ext.define('modernmaterial.view.main.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'mainlist',

    requires: [
        'modernmaterial.store.Personnel'
    ],

    items: [

      {
          xtype : 'toolbar',
          docked: 'top',
          items: [
            { xtype: 'button', ui: 'special', text: 'Dark Mode', handler: 'DarkModeClick'},
            { text: 'Light Mode', handler: 'LightModeClick'},
            { text: 'Fashion', handler: 'FashionClick'},
          ]
      },
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [{
        text: 'Name',
        dataIndex: 'name',
        width: 100,
        cell: {
            userCls: 'bold'
        }
    }, {
        text: 'Email',
        dataIndex: 'email',
        width: 230
    }, {
        text: 'Phone',
        dataIndex: 'phone',
        width: 150
    }],

    listeners: {
        select: 'onItemSelected'
    }
});
