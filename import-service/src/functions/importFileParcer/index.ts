import { handlerPath } from "@libs/handler-resolver";

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      s3: {
        bucket: "patterns-images",
        event: "s3:ObjectCreated:*",    
        existing: true,
        forceDeploy: true,
        rules: [{
          prefix: "uploaded/",
          // suffix: ".csv",
        }],
      },
    },
  ],
};