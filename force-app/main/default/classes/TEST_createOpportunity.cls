public with sharing class TEST_createOpportunity {

    @AuraEnabled
    public static List<String> getAllField(){
        System.debug('Hello');
        List<Metadata.Metadata> layouts = 
        Metadata.Operations.retrieve(Metadata.MetadataType.Layout, 
                                        new List<String> {'詳細 Layout'});
        Metadata.Layout layoutMd = (Metadata.Layout) layouts.get(0);

        List<String> fields = new List<String>();
        for (Metadata.LayoutSection section : layoutMd.layoutSections) {
            for (Metadata.LayoutColumn column : section.layoutColumns) {
                if (column.layoutItems != null) {
                    for (Metadata.LayoutItem item : column.layoutItems) {
                        fields.add(item.field);
                    }
                }
            }
        }
        System.debug('field: '+fields);
        return fields;
    }
}
