import React from 'react';
import { Droppable } from '@hello-pangea/dnd';
import { ToDoList } from '../App';
import SingleToDo from './SingleToDo';

type Props = {
  todoList: ToDoList[];
  setTodoList: React.Dispatch<React.SetStateAction<ToDoList[]>>;
  completeTodo: ToDoList[];
};

function CompleteToDo({ todoList, setTodoList, completeTodo }: Props) {
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
            {completeTodo.map((eachTodo, index) => (
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

export default CompleteToDo;
