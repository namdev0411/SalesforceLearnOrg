public without sharing class TEST_OpportunityTriggerHandler {
    public static void beforeUpdateTriggerHanlde(List<Opportunity> targets){
        List<UpCMT__c> upcmts = new List<UpCMT__c>();
        for(Opportunity opp : targets){
            UpCMT__c upcmt = new UpCMT__c(Opportunity__c = opp.Id, CmtContent__c = opp.UpCMT__c);
            upcmts.add(upcmt);
            opp.UpCMT__c = '';
        }
        try {
            insert upcmts;
        } catch (DMLException e) {
            System.debug('show Err');
        }
    }
}

