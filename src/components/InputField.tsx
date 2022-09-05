import React, { useRef } from 'react';
import { ToDoList } from '../App';
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  todoList: ToDoList[];
  setTodoList: React.Dispatch<React.SetStateAction<ToDoList[]>>;
}

const InputField = ({ todo, setTodo, todoList, setTodoList }: Props) => {
  const inputEl = useRef<HTMLInputElement>(null);
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
    inputEl.current?.blur(); //Shift focus away from the input field after submit
    return;
  };
  return (
    <div className='input-field w-full px-6'>
      <form className='relative' onSubmit={handleSubmit}>
        <input
          type='text'
          name='task'
          id='task'
          ref={inputEl}
          placeholder='Enter a task'
          className='rounded-full border-none shadow-inner text-2xl py-3 px-4 w-full focus:outline-none focus:shadow-[0_0_10px_1000px_rgba(0,0,0,0.5)] '
          value={todo}
          onChange={e => setTodo(e.target.value)}
        />
        <input
          type='submit'
          value='Go'
          className='border-solid bg-backgroundBlue w-12 h-12 m-1 right-0 text-lg  rounded-full text-white cursor-pointer absolute shadow-[0_0_10px_rgb(0,0,0)] active:scale-90 hover:scale-90 hover:bg-blueHover focus:outline-none'
        />
      </form>
    </div>
  );
};

export default InputField;
