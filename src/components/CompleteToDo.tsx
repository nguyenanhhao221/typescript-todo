import React from 'react';
import { Droppable } from '@hello-pangea/dnd';
import { ToDoList } from '../App';
import SingleToDo from './SingleToDo';

type Props = {
  completeTodo: ToDoList[];
  activeTodo: ToDoList[];
  setTodoList: React.Dispatch<React.SetStateAction<ToDoList[]>>;
};

function CompleteToDo({ completeTodo, activeTodo, setTodoList }: Props) {
  return (
    <Droppable droppableId='complete-todo'>
      {provided => (
        <div className='CompleteToDo w-full bg-red-400 p-3'>
          <h2 className='text-white text-3xl'>Completed</h2>
          <ul
            className='flex flex-col font-Neucha'
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {completeTodo
              .filter(todo => todo.isDone === true)
              .map((todo, index) => (
                <li key={todo.id} className='py-2'>
                  <SingleToDo
                    todo={todo}
                    completeTodo={completeTodo}
                    activeTodo={activeTodo}
                    setTodoList={setTodoList}
                    index={index}
                  />
                </li>
              ))}
            {provided.placeholder}
          </ul>
        </div>
      )}
    </Droppable>
  );
}

export default CompleteToDo;
