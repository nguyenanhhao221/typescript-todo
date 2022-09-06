import { Droppable } from '@hello-pangea/dnd';
import React from 'react';
import { ToDoList } from '../App';
import SingleToDo from './SingleToDo';

type Props = {
  todoList: ToDoList[];
  setTodoList: React.Dispatch<React.SetStateAction<ToDoList[]>>;
  activeTodo: ToDoList[];
};

function ActiveToDo({ todoList, setTodoList, activeTodo }: Props) {
  return (
    <Droppable droppableId='active-todo'>
      {provided => (
        <div className='ActiveToDo w-full bg-teal-300 p-3'>
          <h2 className='text-white text-3xl'>Active</h2>
          <ul
            className='flex flex-col space-y-2 font-Neucha'
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {activeTodo.map((eachTodo, index) => (
              <SingleToDo
                index={index}
                setTodoList={setTodoList}
                todo={eachTodo}
                todoList={todoList}
                key={eachTodo.id}
              />
            ))}
            {provided.placeholder}
          </ul>
        </div>
      )}
    </Droppable>
  );
}

export default ActiveToDo;
