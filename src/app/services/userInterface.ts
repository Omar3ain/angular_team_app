import Todo from "./todoInterface";
export default interface User {
  id : number;
  name : string;
  // password: string;
  qoute : string;
  todos : Todo[];
}