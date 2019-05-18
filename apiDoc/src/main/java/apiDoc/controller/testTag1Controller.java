package apiDoc.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONObject;


@RestController
@RequestMapping("/testTag1")
public class testTag1Controller {

	@RequestMapping(value = "/test1", method = RequestMethod.GET)
	@ResponseBody
	/**
	 * @apiDefine MySuccess
	 * @apiSuccess {int} code code.
	 * @apiSuccess {string} message message.
	 * @apiSuccess {object} data data.
	 */
	/**
	 * @api {get} /test1 tag1 test1
     * @apiGroup tag1
	 * @apiVersion 0.0.0
	 * @apiName Tag1Test1
	 * 
	 * @apiUse MySuccess
	 * 
	 * @apiSampleRequest http://localhost:8080/apiDoc/testTag1/test1
	 */
	public JSONObject test1() {
		JSONObject response = new JSONObject();
		response.put("code", 0);
		response.put("message", "test1 ok!");
		JSONObject data = new JSONObject();
		data.put("id", 333);
		data.put("name", "response name");
		response.put("data", data);
		return response;
	}
	
	@RequestMapping(value = "/test2/{user_id}", method = RequestMethod.POST)
	@ResponseBody
	/**
	 * @api {post} /test2/:user_id tag1 test2
	 * 
	 * @apiVersion 0.0.0
	 * @apiName Tag1Test2
     * @apiGroup tag1
     * @apiDescription this is tag1 test2
     * 
     * @apiExample {curl} Example usage:
     * 		curl -i http://localhost:8080/apiDoc/testTag1/test2/2
     * 
	 * @apiParam {Integer="1","2"} user_id user id
	 * @apiParam {Double} funds user funds
	 * @apiParam {String{..10}} name="defaultName" user name
	 * 
	 * @apiParamExample param example
	 * 	{
	 * 		"user_id": 2,
	 * 		"funds": 111.222,
	 * 		"name": myName
	 * 	}
	 * 
	 * @apiSuccess {Integer} code code
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
	public JSONObject test2(HttpServletRequest request,
			@PathVariable(value = "user_id") Integer userid,
			@RequestParam(value = "funds", required = true, defaultValue = "111.222") Double funds,
			@RequestParam(value = "name", required = false) String name) {
		JSONObject response = new JSONObject();
		
		response.put("code", 0);
		response.put("message", "test2 message");
		JSONObject data = new JSONObject();
		data.put("userid", userid);
		data.put("funds", funds);
		data.put("name", name);
		response.put("data", data);
		return response;
	}
	
	
	
	
	
}