import React from 'react';
import { ToDoList } from '../App';
import CompleteToDo from './CompleteToDo';
import ActiveToDo from './ActiveToDo';

type Props = {
  todoList: ToDoList[];
  setTodoList: React.Dispatch<React.SetStateAction<ToDoList[]>>;
};

const AllToDo = ({ todoList, setTodoList }: Props) => {
  return (
    <div className='AllTodo w-full px-10 flex gap-4 font-Neucha '>
      <ActiveToDo
        activeTodo={todoList.filter(todo => todo.isDone === false)}
        completeTodo={todoList.filter(todo => todo.isDone === true)}
        setTodoList={setTodoList}
      />
      <CompleteToDo
        completeTodo={todoList.filter(todo => todo.isDone === true)}
        activeTodo={todoList.filter(todo => todo.isDone === false)}
        setTodoList={setTodoList}
      />
    </div>
  );
};

export default AllToDo;
