// import products from '../mocks/products.json' assert { type: 'json' };
// import stocks from '../mocks/stocks.json' assert { type: 'json' };
// const products = require('../mocks/products.json');
// const stocks = require('../mocks/products.json');

// import { DynamoDBClient, BatchWriteItemCommand } from "@aws-sdk/client-dynamodb";
// import {
  // DynamoDBDocumentClient,
  // ScanCommand,
  // QueryCommand,
// } from "@aws-sdk/lib-dynamodb";

var products = require("../mocks/products.json");
var stocks = require("../mocks/stocks.json");

var { DynamoDBClient, BatchWriteItemCommand }  = require("@aws-sdk/client-dynamodb");

const client = new DynamoDBClient();

const productsJson = products.map(({ id, title, description, price }) => ({
  PutRequest: {
    Item: {
      id: {
        S: id,
      },
      title: {
        S: title,
      },
      description: {
        S: description,
      },
      price: {
        N: `${price}`,
      },
    },
  },
}));

const stocksJson = stocks.map(({ productId, count }) => ({
  PutRequest: {
    Item: {
      productId: {
        S: productId,
      },
      count: {
        N: `${count}`,
      },
    },
  },
}));

// var ddb = new AWS.DynamoDB();
var handler = function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
};

const batchProducts = async () => {
    const command = new BatchWriteItemCommand({
      // TableName: process.env.TABLE_NAME,
      RequestItems: {
        products: [...productsJson],
      },
    }, handler);
    return await client.send(command); 
  };
  const batchStocks = async () => {
    const command = new BatchWriteItemCommand({
      // TableName: process.env.TABLE_NAME,
      RequestItems: {
        stocks: [...stocksJson],
      },
    }, handler);
    return await client.send(command); 
  };


  batchProducts();
  batchStocks();