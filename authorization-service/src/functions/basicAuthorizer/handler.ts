import { APIGatewayTokenAuthorizerEvent } from "aws-lambda";

enum Actions {
  ALLOW = "Allow",
  DENY = "Deny",
}

const parseCreds = (authorizationToken: string) => {
  const encodedCreds = authorizationToken.split(" ")[1];
  console.log(encodedCreds);
  const plainCreds = Buffer.from(encodedCreds, "base64").toString().split(":");
  console.log(plainCreds);
  const username = plainCreds[0];
  const password = plainCreds[1];

  return {
    principalId: encodedCreds,
    username,
    password,
  };
};

const generatePolicyDocument = (
  event: APIGatewayTokenAuthorizerEvent,
  action: Actions
) => {
  const tmp = event.methodArn.split(":");
  const apiGatewayArnTmp = tmp[5].split("/");
  const awsAccountId = tmp[4];
  const awsRegion = tmp[3];
  const restApiId = apiGatewayArnTmp[0];
  const stage = apiGatewayArnTmp[1];
  const apiArn =
    "arn:aws:execute-api:" +
    awsRegion +
    ":" +
    awsAccountId +
    ":" +
    restApiId +
    "/" +
    stage +
    "/*/*";

  const policy = {
    Version: "2012-10-17",
    Statement: [
      {
        Action: "execute-api:Invoke",
        Effect: action,
        Resource: [apiArn],
      },
    ],
  };

  console.log(JSON.stringify(policy));

  return policy;
};

const basicAuthorizer = async (event, context) => {
  const { authorizationToken } = event;
  console.log('authorizationToken', authorizationToken);
  let action = Actions.ALLOW;

  if (!authorizationToken) {
    /*action = Actions.DENY;
    return {
      policyDocument: generatePolicyDocument(event, action),
    };*/
    return context.fail("Unauthorized");
  }
  const { username, password, principalId } = parseCreds(authorizationToken);
  console.log('process.env.username', process.env.username);
  console.log('process.env.password', process.env.password);
  console.log('username', username);
  console.log('password', password);
  if (!(username === process.env.username && password === process.env.password)) {
    action = Actions.DENY;
  }
  console.log('action', action);
  return {
    principalId: principalId,
    policyDocument: generatePolicyDocument(event, action),
  };
};

export const main = basicAuthorizer;
