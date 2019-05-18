package apiDoc.controller;

public class _testTag1Controller {

	/**
	 * @apiDefine MySuccess
	 * @apiSuccess {int} code code.
	 * @apiSuccess {string} message message.
	 * @apiSuccess {object} data data.
	 */
	/**
	 * @api {get} /test1 tag1 test1
     * @apiGroup tag1
	 * @apiVersion 0.0.1
	 * @apiName Tag1Test1
	 * 
	 * @apiUse MySuccess
	 * 
	 * @apiSampleRequest http://localhost:8080/apiDoc/testTag1/test1
	 */
	
	
	
	/**
	 * @api {post} /test2/:user_id tag1 test2
	 * 
	 * @apiVersion 0.0.1
	 * @apiName Tag1Test2
     * @apiGroup tag1
     * @apiDescription this is tag1 test2
     * 
     * @apiExample {curl} Example usage:
     * 		curl -i http://localhost:8080/apiDoc/testTag1/test2/2
     * 
	 * @apiParam {Integer="1","2"} user_id user id
	 * @apiParam {Double} funds user funds
	 * @apiParam {String{..5}} name="defaultName" user name
	 * 
	 * @apiParamExample param example
	 * 	{
	 * 		"user_id": 2,
	 * 		"funds": 111.222,
	 * 		"name": "myName"
	 * 	}
	 * 
	 *
	 * @apiSuccess (Error 4XX) {String} message message
	 * @apiSuccess (Success 200) {JSONObject[]} data data
	 * @apiSuccess (Success 200) {Integer} data.userid userid
	 * @apiSuccess (Success 200) {Double} data.funds funds
	 * @apiSuccess (Success 200) {String} data.name name
	 * 
	 * @apiSuccessExample {json} success-response:
	 * {
	 * 		"code": 0,
	 * 		"message": null,
	 * 		"data": {
	 * 			"user_id": 1,
	 * 			"funds": 123.321,
	 * 			"name": "myName"
	 * 		}
	 * }
	 * 
	 * @apiError (Error 4xx) 40502 param is invalid
	 * @apiError (Error 4xx) 404 not found
	 * @apiErrorExample {json} error-response:
	 * HTTP/1.1 404 Not Found
	 * {
	 * 		"error": not found
	 * }
	 * @apiSampleRequest /testTag1/test2/:user_id
	 */
}
