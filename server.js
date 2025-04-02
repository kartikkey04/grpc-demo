const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const packageDef = protoLoader.loadSync('todo.proto',{}); 
const grpcObject = grpc.loadPackageDefinition(packageDef);
const todoPackage = grpcObject.todoPackage;

// Implement the service

const todos = [];

function createTodo(call, callback) {
  console.log(call);
}

function readTodos(call, callback) {
  // ...  
}

// Create a server
const server = new grpc.Server(); 
server.addService(todoPackage.Todo.service, {
  "createTodo": createTodo, 
  "getTodos": readTodos
});

// Start listening 
server.bind('0.0.0.0:4000', grpc.ServerCredentials.createInsecure());
server.start();