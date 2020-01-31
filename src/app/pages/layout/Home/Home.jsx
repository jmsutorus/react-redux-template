import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../../../store/actions/TodoActions';
import Todo from '../../../components/Todo';

function Home() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.RootReducer);
  const [myText, setMyText] = useState('');
  return (
    <div className="home" title="header">
      <form style={{ margin: '12px' }}>
        <input state={myText} onChange={e => setMyText(e.target.value)} />
        <button type="button" onClick={() => dispatch(addTodo(myText))}>
          Add Todo
        </button>
      </form>
      <div>{todos && todos.map(todo => <Todo key={todo.id} todo={todo} />)}</div>
    </div>
  );
}

export default Home;
