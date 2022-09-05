import { Droppable } from '@hello-pangea/dnd';
import React from 'react';
import { ToDoList } from '../App';
import SingleToDo from './SingleToDo';

type Props = {
  activeTodo: ToDoList[];
  setTodoList: React.Dispatch<React.SetStateAction<ToDoList[]>>;
  completeTodo: ToDoList[];
};

function ActiveToDo({ activeTodo, setTodoList, completeTodo }: Props) {
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
            {activeTodo.map((todo, index) => (
              <SingleToDo
                todo={todo}
                activeTodo={activeTodo}
                completeTodo={completeTodo}
                setTodoList={setTodoList}
                index={index}
                key={todo.id}
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
