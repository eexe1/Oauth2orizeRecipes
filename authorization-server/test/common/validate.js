var assert = require("assert");

//Assert that we got back an application/json response

var validate = {};

/**
 * Validates an access token.  An access token should be in the form of:
 * {
 *     access_token: (some 256 characters)
 *     expires_in: 3600
 *     token_type: "bearer"
 * }
 * @param headers The http headers
 * @param body The body of the message which contains the access token and refresh token
 */
validate.validateAccessToken = function (headers, body) {
    var jsonResponse = JSON.parse(body);
    assert.equal(headers["content-type"], "application/json");
    assert.equal(Object.keys(jsonResponse).length, 3);
    assert.equal(jsonResponse.access_token.length, 256);
    assert.equal(jsonResponse.expires_in, 3600);
    assert.equal(jsonResponse.token_type, "bearer");
};

/**
 * Validates an access token.  An access token should be in the form of:
 * {
 *     access_token: (some 256 characters)
 *     refresh_token: (some 256 characters)
 *     expires_in: 3600
 *     token_type: "bearer"
 * }
 * @param headers The http headers
 * @param body The body of the message which contains the access token and refresh token
 */
validate.validateAccessRefreshToken = function (headers, body) {
    var jsonResponse = JSON.parse(body);
    assert.equal(headers["content-type"], "application/json");
    assert.equal(Object.keys(jsonResponse).length, 4);
    assert.equal(jsonResponse.access_token.length, 256);
    assert.equal(jsonResponse.expires_in, 3600);
    assert.equal(jsonResponse.token_type, "bearer");
};

/**
 * Validates an access token.  An access token should be in the form of:
 * {
 *     access_token: (some 256 characters)
 *     refresh_token: (some 256 characters)
 *     expires_in: 3600
 *     token_type: "bearer"
 * }
 * @param headers The http headers
 * @param body The body of the message which contains the access token and refresh token
 */
validate.validateUserJson = function (headers, body) {
    var jsonResponse = JSON.parse(body);
    assert.equal(headers["content-type"], "application/json; charset=utf-8");
    assert.equal(Object.keys(jsonResponse).length, 3);
    assert.equal(jsonResponse.user_id, "1");
    assert.equal(jsonResponse.name, "Bob Smith");
    assert.equal(jsonResponse.scope, "*");
};

/**
 * Validates an invalid code error.  The error should be in the form of:
 * {
 *     error: invalid_grant
 *     error_description: invalid_code
 * }
 * @param headers The http headers
 * @param body The body of the message which contains the error message
 */
validate.validateInvalidCodeError = function (headers, body) {
    var jsonResponse = JSON.parse(body);
    assert.equal(headers["content-type"], "application/json");
    assert.equal(Object.keys(jsonResponse).length, 2);
    assert.equal(jsonResponse.error, "invalid_grant");
    assert.equal(jsonResponse.error_description, "invalid code");
};

exports.validate = validate;