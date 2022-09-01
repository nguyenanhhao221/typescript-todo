import React from 'react';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleSubmit }) => {
  return (
    <div className='input-field w-full px-3'>
      <form className='relative' onSubmit={handleSubmit}>
        <input
          type='text'
          name='task'
          id='task'
          placeholder='Enter a task'
          className='rounded-full border-none shadow-inner text-2xl py-3 px-4 w-full focus:outline-none focus:shadow-[0_0_10px_1000px_rgba(0,0,0,0.5)] '
          value={todo}
          onChange={e => setTodo(e.target.value)}
        />
        <input
          type='submit'
          value='Go'
          className='border-solid bg-backgroundBlue w-12 h-12 m-1 right-0 text-lg  rounded-full text-white cursor-pointer absolute shadow-[0_0_10px_rgb(0,0,0)] active:scale-90 hover:bg-blueHover focus:outline-none'
        />
      </form>
    </div>
  );
};

export default InputField;
