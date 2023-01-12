import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

const style = {
    li: `mt-8 flex justify-between p-2 my-2 uppercase bg-gray-400 rounded-lg max-w-xl mx-auto`,
    liComplete: `mt-8 flex justify-between p-2 my-2 uppercase bg-gray-200 rounded-lg max-w-xl mx-auto`,
    row: `flex`,
    text: `px-2 cursor-pointer`,
    textComplete: `px-2 cursor-pointer line-through`,
    info: `flex justify-between text-gray-600 px-8 max-w-xl mx-auto`,
    group: `mb-2 `,
    sets: ``,
    reps: ``,
    button: `cursor-pointer hover:text-red-500`,
}

const Workout = ({workout, toggleComplete, deleteWorkout }) => {
  return (
    <>
    <li className={workout.completed ? style.liComplete : style.li}>
        <div className={style.row}>
            <input onChange={() => toggleComplete(workout)}
                type="checkbox" 
                checked={workout.completed ? 'checked' : ''}/>
            <p onClick={() => toggleComplete(workout)}
                className={workout.completed ? style.textComplete : style.text}>
                {workout.text}
            </p>
        </div>
        <button onClick={() => deleteWorkout(workout.id)}>
            <FaRegTrashAlt />
        </button>
    </li>
    <div className={style.info}>
        <p className={style.group}>{workout.group}</p>
    </div>
    <div className={style.info}>
        <p className={style.sets}>{workout.sets}</p>
        <p> x </p>
        <p className={style.reps}>{workout.reps}</p>
    </div>
    </>
  )
}

export default Workout;