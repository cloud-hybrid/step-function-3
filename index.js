let response;

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

exports.handler = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;

    console.debug("Event" + ":", event);
    console.debug("Context" + ":", context);

    response = JSON.stringify({
        "statusCode": 200,
        "body": JSON.stringify({
            message: "Successful",
            data: event
        }, null, 4)
    });
    try {
    } catch (error) {
        console.error(error);

        return JSON.stringify({
            "statusCode": 500,
            "body": JSON.stringify({
                message: "Error",
                data: JSON.stringify(error, null, 4)
            }, null, 4)
        });
    }

    console.info(response);

    return response;
};
