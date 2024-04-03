import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  ScanCommand,
  PutCommand,
  QueryCommand,
} from "@aws-sdk/lib-dynamodb";


const client = new DynamoDBClient();

const scan = async () => {
  console.log('===');
  const command = new ScanCommand({
    TableName: process.env.TABLE_NAME
  });
  return await client.send(command);
};

const query = async (id) => {
  const command = new QueryCommand({
    TableName: process.env.TABLE_NAME,
    KeyConditionExpression: 'id = :id',
    ExpressionAttributeValues: {':id': id},
  });
  return await client.send(command);
};
const put = async (item) => {
  const command = new PutCommand({
    TableName: process.env.TABLE_NAME,
    Item: item,
  });
  return await client.send(command);
};

export const handler = async () => {
  const scanResults = await scan();
  const queryResults = await query(0);
  const item = {id: 1, title: 'Inserted from Lambda function', isCompleted: false };
  await put(item);
  const scan2Results = await scan();
  return { scanResults, queryResults, scan2Results };
};


console.log(await scan());