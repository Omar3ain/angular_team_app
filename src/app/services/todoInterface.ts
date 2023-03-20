export default interface Todo {
  id : number;
  title : string;
  status : 'todo' | 'compeleted';
  isLoved : boolean;
}