import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeTodo, completeTodo } from '../../store/actions/TodoActions';

const propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string,
    completed: PropTypes.boolean,
    id: PropTypes.number
  }).isRequired
};

const defaultProps = {};

function Todo({ todo }) {
  const dispatch = useDispatch();
  return (
    <div style={{ margin: '12px', border: '1px solid grey', padding: '6px' }}>
      <div>
        This is
        {todo.completed ? <span> Completed </span> : <span> Not Completed </span>}
        TODO:
      </div>
      <div>{todo.text}</div>
      <button type="button" onClick={() => dispatch(completeTodo(todo.id))}>
        Complete
      </button>
      <button type="button" onClick={() => dispatch(removeTodo(todo.id))}>
        Delete Todo
      </button>
    </div>
  );
}

Todo.propTypes = propTypes;
Todo.defaultProps = defaultProps;

export default Todo;
