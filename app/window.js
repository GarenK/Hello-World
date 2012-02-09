Ext.define('Hello-World.window', {
    extend: 'Ext.window.Window',
	itemId: 'window',
    width: 300,
    height: 200,
    title: 'window',
	//layout: 'border',
	
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
				{
					text:'Hello-World'
				}
			]
		});
		me.callParent(arguments);
	}
}