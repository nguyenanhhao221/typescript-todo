import React, { useRef, useState } from 'react';
import { ToDoList } from '../App';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import { Draggable } from '@hello-pangea/dnd';
type Props = {
  todo: ToDoList;
  setTodoList: React.Dispatch<React.SetStateAction<ToDoList[]>>;
  index: number;
  todoList: ToDoList[];
};

const SingleToDo = ({ todo, setTodoList, todoList, index }: Props) => {
  const [editMode, setEditMode] = useState(false);
  //handleDone
  //Whenever user clicked on the done button on single todo, go through the todoList array, change any todo object with id matched then changes isDone property.
  const handleDone: (todoId: number) => void = todoId => {
    setTodoList(
      todoList.map(todo => {
        return todo.id === todoId ? { ...todo, isDone: !todo.isDone } : todo;
      })
    );
  };

  //handleDelete
  const handleDelete: (todoId: number) => void = todoId => {
    setTodoList(todoList.filter(todo => todo.id !== todoId));
  };
  const inputEl = useRef<HTMLInputElement>(null);
  //*Set up text in todo to display based on isDone or Edit mode
  let todoText: JSX.Element = <span className='todo-text'>{todo.todo} </span>;
  if (todo.isDone) {
    todoText = <s className='todo-text'>{todo.todo}</s>;
  } else if (!todo.isDone && editMode) {
    todoText = (
      <input
        type='text'
        name='todo-text'
        id='todo-text'
        value={todo.todo}
        placeholder='Edit Todo'
        autoFocus
        ref={inputEl}
        onChange={e => {
          setTodoList(
            todoList.map(eachTodo =>
              eachTodo.id === todo.id
                ? { ...eachTodo, todo: e.target.value }
                : eachTodo
            )
          );
        }}
        required
        className='todo-text bg-transparent focus:outline-none w-full'
      />
    );
  }

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided, snapshot) => (
        <li
          className={`my-2 ${
            snapshot.isDragging ? `shadow-[0_0_20px_rgb(0,0,0)]` : ``
          }`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <form
            className="single-todo flex justify-between p-4 rounded-md w-full hover:scale-105 focus:scale-105 duration-200 bg-[url('https://img.freepik.com/free-photo/crumpled-yellow-paper-background-close-up_60487-2390.jpg?size=626&ext=jpg')]"
            onSubmit={e => {
              e.preventDefault();
              inputEl.current?.blur();
              setEditMode(!editMode);
              return;
            }}
          >
            {todoText}

            <div className='flex items-center gap-x-1'>
              <span className='icon cursor-pointer'>
                <AiFillEdit onClick={() => setEditMode(!editMode)} />
              </span>
              <span className='icon cursor-pointer'>
                <AiFillDelete onClick={() => handleDelete(todo.id)} />
              </span>
              <span className='icon cursor-pointer'>
                <MdDone onClick={() => handleDone(todo.id)} />
              </span>
            </div>
          </form>
        </li>
      )}
    </Draggable>
  );
};

export default SingleToDo;
