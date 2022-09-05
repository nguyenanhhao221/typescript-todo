import { DragDropContext } from '@hello-pangea/dnd';
import React, { useState } from 'react';
import AllToDo from './components/AllToDo';
import InputField from './components/InputField';

export interface ToDoList {
  id: number;
  todo: string;
  isDone: boolean;
}
const App = () => {
  const [todo, setTodo] = useState<string>('');
  const [todoList, setTodoList] = useState<ToDoList[]>([]);

  const onDragEnd = (result: any) => {
    //TODO Finish ondragend
    console.log(result);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className='App h-screen bg-backgroundBlue flex flex-col items-center gap-5'>
        <h1 className='font-Neucha text-3xl text-center text-white py-5'>
          Taskify
        </h1>
        <InputField
          todo={todo}
          setTodo={setTodo}
          todoList={todoList}
          setTodoList={setTodoList}
        />
        <AllToDo todoList={todoList} setTodoList={setTodoList} />
      </div>
    </DragDropContext>
  );
};
export default App;
