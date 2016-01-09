'use strict';

/**
 * @ngdoc service
 * @name cattlecrewCaseManagementUiApp.camundaMilestoneService
 * @description
 * # camundaMilestoneService
 * Factory in the cattlecrewCaseManagementUiApp.
 */
angular.module('cattlecrewCaseManagementUiApp')
  .factory('camundaMilestoneService', function () {
    //
    // local namespace
    //
    var srv = {};

    srv._milestones = [
	{
		"id":"2e89d49e-b564-11e5-a83c-fecc75749441",
		"parentCaseActivityInstanceId":"2e884df6-b564-11e5-a83c-fecc75749441",
		"caseActivityId":"PI_MS_responsibilitiesIdentified",
		"caseActivityName":"Responsibilities Identified",
		"caseActivityType":"milestone",
		"caseDefinitionId":"claim_file:1:28dad2fd-497c-11e5-91ed-90489a0a0197",
		"caseInstanceId":"2e884df6-b564-11e5-a83c-fecc75749441",
		"caseExecutionId":"2e89d49e-b564-11e5-a83c-fecc75749441",
		"taskId":null,"calledProcessInstanceId":null,
		"calledCaseInstanceId":null,
		"createTime":"2016-01-07T18:29:18",
		"endTime":"2016-01-07T18:29:18",
		"durationInMillis":3,
		"available":false,
		"enabled":false,
		"disabled":false,
		"active":false,
		"completed":true,
		"terminated":false
	},
	{
		"id":"2e89fbb2-b564-11e5-a83c-fecc75749441",
		"parentCaseActivityInstanceId":"2e884df6-b564-11e5-a83c-fecc75749441",
	
	"caseActivityId":"PI_MS_claimsProcessed",
		"caseActivityName":"Claims processed",
		"caseActivityType":"milestone",
		"caseDefinitionId":"claim_file:1:28dad2fd-497c-11e5-91ed-90489a0a0197",
		"caseInstanceId":"2e884df6-b564-11e5-a83c-fecc75749441",
		"caseExecutionId":"2e89fbb2-b564-11e5-a83c-fecc75749441",
		"taskId":null,"calledProcessInstanceId":null,
		"calledCaseInstanceId":null,"createTime":"2016-01-07T18:29:18",
		"endTime":null,"durationInMillis":null,
		"available":true,
		"enabled":false,
		"disabled":false,
		"active":false,
		"completed":false,
		"terminated":false
	},
	{
		"id":"2e99da40-b564-11e5-a83c-fecc75749441",
		"parentCaseActivityInstanceId":"2e89d4a0-b564-11e5-a83c-fecc75749441",
		"caseActivityId":"PI_MS_baseInformationAttached",
		"caseActivityName":"Base Information Attached",
		"caseActivityType":"milestone",
		"caseDefinitionId":"claim_file:1:28dad2fd-497c-11e5-91ed-90489a0a0197",
		"caseInstanceId":"2e884df6-b564-11e5-a83c-fecc75749441",
		"caseExecutionId":"2e99da40-b564-11e5-a83c-fecc75749441",
		"taskId":null,
		"calledProcessInstanceId":null,
		"calledCaseInstanceId":null,
		"createTime":"2016-01-07T18:29:18",
		"endTime":null,
		"durationInMillis":null,
		"available":true,
		"enabled":false,
		"disabled":false,
		"active":false,
		"completed":false,
		"terminated":false
	}
    ];

    //
    // Service logic
    //

    srv.getMilestones = function() {
      // Copy the array in order not to expose
      // the internal data structure
      return angular.copy(srv._milestones);
    };

    srv.getMilestoneById = function(id) {
      for (var i = 0, n = srv._milestones.length; i < n; i++) {
        if (id === srv._milestones[i].id) {
          return angular.copy(milestones._cases[i]);
        }
      }

      return null;
    };

    //
    // Public API
    //
    return {
      getMilestones: function () {
        return srv.getMilestones();
      },
      getMilestoneById: function(id) {
        return srv.getMilestoneById(id);
      }
    };
  });