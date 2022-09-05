import React, { useRef, useState } from 'react';
import { ToDoList } from '../App';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import { Draggable } from '@hello-pangea/dnd';
type Props = {
  todo: ToDoList;
  setTodoList: React.Dispatch<React.SetStateAction<ToDoList[]>>;
  index: number;
  activeTodo: ToDoList[];
  completeTodo: ToDoList[];
};

const SingleToDo = ({ todo, activeTodo, setTodoList, index }: Props) => {
  const [editMode, setEditMode] = useState(false);
  //handleDone
  //Whenever user clicked on the done button on single todo, go through the todoList array, change any todo object with id matched then changes isDone property.
  const handleDone: (todoId: number) => void = todoId => {
    if (activeTodo) {
      setTodoList(
        activeTodo.map(todo => {
          return todo.id === todoId ? { ...todo, isDone: !todo.isDone } : todo;
        })
      );
    }
  };

  //handleDelete
  const handleDelete: (todoId: number) => void = todoId => {
    if (activeTodo) {
      setTodoList(activeTodo.filter(todo => todo.id !== todoId));
    }
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
            activeTodo.map(eachTodo =>
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
      {provided => (
        <li
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
