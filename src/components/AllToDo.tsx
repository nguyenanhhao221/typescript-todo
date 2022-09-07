import React from 'react';
import { ToDoList } from '../App';
import CompleteToDo from './CompleteToDo';
import ActiveToDo from './ActiveToDo';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';

type Props = {
  todoList: ToDoList[];
  setTodoList: React.Dispatch<React.SetStateAction<ToDoList[]>>;
  activeTodo: ToDoList[];
  completeTodo: ToDoList[];
};

const AllToDo = ({
  todoList,
  setTodoList,
  activeTodo,
  completeTodo,
}: Props) => {
  //TODO finish
  const handleDragEnd = (result: DropResult) => {
    console.log(result);
    const { source, destination } = result;
    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;
    let add: ToDoList;
    let active = activeTodo;
    let complete = completeTodo;

    // Source Logic
    if (source.droppableId === 'active-todo') {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    // Destination Logic
    if (destination.droppableId === 'active-todo') {
      active.splice(destination.index, 0, add);
      add.isDone = false;
    } else {
      complete.splice(destination.index, 0, add);
      add.isDone = true;
    }

    setTodoList(todoList);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className='AllTodo w-full px-10 flex items-start gap-4 font-Neucha '>
        <ActiveToDo
          todoList={todoList}
          setTodoList={setTodoList}
          activeTodo={activeTodo}
        />
        <CompleteToDo
          setTodoList={setTodoList}
          todoList={todoList}
          completeTodo={completeTodo}
        />
      </div>
    </DragDropContext>
  );
};

export default AllToDo;
