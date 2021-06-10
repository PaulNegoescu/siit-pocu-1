import { useReducer } from 'react';
import clsx from 'clsx';

// import './Counter.css';
import styles from './Counter.module.css';

export function Counter({ diff = 1 }) {
  //   const [value, setValue] = useState(0);

  //   function handleClick(action) {
  //     let newValue = value;

  //     // Flux Pattern
  //     // oldState -> dispatch(action) -> reducer(oldState, newState = action) -> newState
  //     // <-------------------------------------------------------------------------------

  //     switch (action) {
  //       case 'inc':
  //         newValue++;
  //         break;
  //       case 'dec':
  //         newValue--;
  //         break;
  //       default:
  //     }

  //     setValue(newValue);
  //   }

  const [value, dispatch] = useReducer(reducer, 0);

  function reducer(oldValue, action) {
    let newValue = oldValue;

    // Flux Pattern
    // oldState -> dispatch(action) -> reducer(oldState, newState = action) -> newState
    //  action -> { type: 'ceva'[, payload: <any>] }
    // <-------------------------------------------------------------------------------

    switch (action.type) {
      case 'INC':
        newValue += diff;
        break;
      case 'DEC':
        newValue -= diff;
        break;
      default:
    }

    return newValue;
  }

  // const displayClass = value > 0 ? 'positive' : value < 0 ? 'negative' : '';
  // const displayClass = value > 0 ? styles.positive : value < 0 ? styles.negative : '';

  console.log(styles);
  return (
    <>
      <h1>Counter</h1>
      <p>
        {/* <strong className={displayClass}>{value}</strong> */}
        <strong
          className={clsx({
            [styles.positive]: value > 0,
            [styles.negative]: value < 0,
          })}
        >
          {value}
        </strong>
      </p>
      <p>
        <button onClick={() => dispatch({ type: 'DEC' })}>-</button>
        <button onClick={() => dispatch({ type: 'INC' })}>+</button>
      </p>
    </>
  );
}
