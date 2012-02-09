Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'v2',

    launch: function() {
        Ext.QuickTips.init();

Ext.Msg.alert('greeting message', 'Hello-World');

    }
});
