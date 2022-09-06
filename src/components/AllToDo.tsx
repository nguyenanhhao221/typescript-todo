import React from 'react';
import { ToDoList } from '../App';
import CompleteToDo from './CompleteToDo';
import ActiveToDo from './ActiveToDo';

type Props = {
  todoList: ToDoList[];
  setTodoList: React.Dispatch<React.SetStateAction<ToDoList[]>>;
  activeTodo: ToDoList[];
  completeTodo: ToDoList[];
};

const AllToDo = ({
  todoList,
  setTodoList,
  activeTodo,
  completeTodo,
}: Props) => {
  return (
    <div className='AllTodo w-full px-10 flex items-start gap-4 font-Neucha '>
      <ActiveToDo
        todoList={todoList}
        setTodoList={setTodoList}
        activeTodo={activeTodo}
      />
      <CompleteToDo
        setTodoList={setTodoList}
        todoList={todoList}
        completeTodo={completeTodo}
      />
    </div>
  );
};

export default AllToDo;
