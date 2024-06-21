const jsonString = '{"name": "John", "age": 30, "city": "New York"}';

// Convert JSON string to objectconsole.log(jsonObject.name);
const jsonObject = JSON.parse(jsonString);

 // Output: John
console.log(jsonObject.name);




const objectToConvert = { name: "Alice", age: 25 };
// Convert object JSON string
const jsonStringified = JSON.stringify(objectToConvert); 

// Output: {"name": "Alice", "age":25}
console.log(jsonStringified); 


