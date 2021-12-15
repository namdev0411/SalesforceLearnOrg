({
    init : function(cmp, event, helper) {
        var navService = cmp.find("navService");
        var pageRef = {
            type: "standard__objectPage",
            attributes: {
                objectApiName: "Opportunity",
                actionName: "new"
            },
            state: {
            }
        }
        // Replace with your own field values
        var defaultFieldValues = {
            StageName: "作成中"
        };
        pageRef.state.defaultFieldValues = cmp.find("pageRefUtils").encodeDefaultFieldValues(defaultFieldValues);
        cmp.set("v.pageReference", pageRef);
        // var pageRef = cmp.get("v.pageReference");
        navService.navigate(pageRef);
    },
})