import Todo from "./todoInterface";
export default interface User {
  id : number;
  name : string;
  qoute : string;
  todos : Todo[];
}