define({ "api": [
  {
    "type": "get",
    "url": "/test1",
    "title": "tag1 test1",
    "group": "tag1",
    "version": "0.0.1",
    "name": "Tag1Test1",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/apiDoc/testTag1/test1"
      }
    ],
    "filename": "java/apiDoc/controller/_testTag1Controller.java",
    "groupTitle": "tag1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>code.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>data.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/test1",
    "title": "tag1 test1",
    "group": "tag1",
    "version": "0.0.0",
    "name": "Tag1Test1",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/apiDoc/testTag1/test1"
      }
    ],
    "filename": "java/apiDoc/controller/testTag1Controller.java",
    "groupTitle": "tag1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>code.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>data.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/test2/:user_id",
    "title": "tag1 test2",
    "version": "0.0.1",
    "name": "Tag1Test2",
    "group": "tag1",
    "description": "<p>this is tag1 test2</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:8080/apiDoc/testTag1/test2/2",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "allowedValues": [
              "\"1\"",
              "\"2\""
            ],
            "optional": false,
            "field": "user_id",
            "description": "<p>user id</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "funds",
            "description": "<p>user funds</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..5",
            "optional": false,
            "field": "name",
            "defaultValue": "defaultName",
            "description": "<p>user name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "param example",
          "content": "{\n\t\"user_id\": 2,\n\t\"funds\": 111.222,\n\t\"name\": \"myName\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Error 4XX": [
          {
            "group": "Error 4XX",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message</p>"
          }
        ],
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSONObject[]",
            "optional": false,
            "field": "data",
            "description": "<p>data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.userid",
            "description": "<p>userid</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "data.funds",
            "description": "<p>funds</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-response:",
          "content": "{\n\t\t\"code\": 0,\n\t\t\"message\": null,\n\t\t\"data\": {\n\t\t\t\"user_id\": 1,\n\t\t\t\"funds\": 123.321,\n\t\t\t\"name\": \"myName\"\n\t\t}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "40502",
            "description": "<p>param is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-response:",
          "content": "HTTP/1.1 404 Not Found\n{\n\t\t\"error\": not found\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8080/apiDoc/testTag1/test2/:user_id"
      }
    ],
    "filename": "java/apiDoc/controller/_testTag1Controller.java",
    "groupTitle": "tag1"
  },
  {
    "type": "post",
    "url": "/test2/:user_id",
    "title": "tag1 test2",
    "version": "0.0.0",
    "name": "Tag1Test2",
    "group": "tag1",
    "description": "<p>this is tag1 test2</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:8080/apiDoc/testTag1/test2/2",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "allowedValues": [
              "\"1\"",
              "\"2\""
            ],
            "optional": false,
            "field": "user_id",
            "description": "<p>user id</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "funds",
            "description": "<p>user funds</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..10",
            "optional": false,
            "field": "name",
            "defaultValue": "defaultName",
            "description": "<p>user name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "param example",
          "content": "{\n\t\"user_id\": 2,\n\t\"funds\": 111.222,\n\t\"name\": myName\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>code</p>"
          },
          {
            "group": "Success 200",
            "type": "JSONObject[]",
            "optional": false,
            "field": "data",
            "description": "<p>data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.userid",
            "description": "<p>userid</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "data.funds",
            "description": "<p>funds</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>name</p>"
          }
        ],
        "Error 4XX": [
          {
            "group": "Error 4XX",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-response:",
          "content": "{\n\t\t\"code\": 0,\n\t\t\"message\": null,\n\t\t\"data\": {\n\t\t\t\"user_id\": 1,\n\t\t\t\"funds\": 123.321,\n\t\t\t\"name\": \"myName\"\n\t\t}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "40502",
            "description": "<p>param is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-response:",
          "content": "HTTP/1.1 404 Not Found\n{\n\t\t\"error\": not found\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8080/apiDoc/testTag1/test2/:user_id"
      }
    ],
    "filename": "java/apiDoc/controller/testTag1Controller.java",
    "groupTitle": "tag1"
  }
] });
