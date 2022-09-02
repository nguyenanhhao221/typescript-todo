import React, { useState } from 'react';
import AllToDo from './components/AllToDo';
import InputField from './components/InputField';

export interface ToDoList {
  id: number;
  todo: string;
  isDone: boolean;
}
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todoList, setTodoList] = useState<ToDoList[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodoList([
        ...todoList,
        {
          id: Date.now(),
          isDone: false,
          todo: todo,
        },
      ]);
      setTodo('');
    }
    return;
  };
  return (
    <div className='App h-screen bg-backgroundBlue flex flex-col items-center gap-5'>
      <h1 className='font-Neucha text-3xl text-center text-white py-5'>
        Taskify
      </h1>
      <InputField todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
      <AllToDo todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
};
export default App;
