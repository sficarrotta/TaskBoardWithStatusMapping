Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    mappedToField:"State",
    mappedFromField:"TaskStatus",

    fieldNameMap:{
    "New" : "Defined",
    "In Dev" : "In-Progress",
    "In QA" : "In-Progress",
    "Completed" : "Completed"
    },
    
    launch: function() {
        //grab the project context for filtering
        var currentProject = this.getContext().getProject().Name;
        var myFilter = Ext.create('Rally.data.QueryFilter', {
            property: 'Project.Name',
            operator: '=',
            value: currentProject
        });
        
        // if there is a timebox on the dashboard/page, make use of it
        var timeboxScope = this.getContext().getTimeboxScope();
        if( timeboxScope ) {
            myFilter = myFilter.and(timeboxScope.getQueryFilter());
        } 
        
        var cardBoardConfig = {
            xtype: 'rallycardboard',
            types: ['Task'],
            cardConfig: {
                xtype: 'rallycard',
                fields: ['Name', 'WorkProduct', 'Estimate', 'ToDo']
            },
            attribute: this.mappedFromField,
            listeners: {
                 beforecarddroppedsave:function(cardboard, card) {
                //map the new state from on this card to the new state
                var newState = this.fieldNameMap[card.record.get(this.mappedFromField)];
                card.record.set(this.mappedToField, newState);
                },
                scope: this
            },
            storeConfig: {
                filters: myFilter
            },
            fetch: "Name,Estimate,ToDo"
        };
        this.cardBoard = this.add(cardBoardConfig);
    }
});