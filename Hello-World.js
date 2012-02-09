Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'Hello-World',

    launch: function() {
        Ext.QuickTips.init();

        var cmp1 = Ext.create('Hello-World.window', {
            renderTo: Ext.getBody()
        });
        cmp1.show();

    }
});
