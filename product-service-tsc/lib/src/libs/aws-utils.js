import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
const client = new S3Client({});
export const getJsonFromS3 = async (bucket, key) => {
    const command = new GetObjectCommand({
        Bucket: bucket,
        Key: key,
    });
    try {
        const response = await client.send(command);
        return JSON.parse(await response.Body.transformToString());
    }
    catch (err) {
        console.error(err);
        throw (new Error('File not found'));
    }
};
//# sourceMappingURL=aws-utils.js.map