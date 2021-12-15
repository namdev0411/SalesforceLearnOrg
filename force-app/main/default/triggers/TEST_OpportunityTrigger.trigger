trigger TEST_OpportunityTrigger on Opportunity (before update) {
  if(Trigger.isBefore && Trigger.isUpdate){
      TEST_OpportunityTriggerHandler.beforeUpdateTriggerHanlde(Trigger.new);
  }
}