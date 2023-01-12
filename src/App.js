import React, { useState, useEffect } from 'react';
import {
  AiOutlinePlus 
} from 'react-icons/ai';
import Workout from './Workout';
import {db} from './firebase';
import {
  query, 
  collection, 
  onSnapshot, 
  updateDoc, 
  doc,
  addDoc,
  deleteDoc,
} from 'firebase/firestore';
import Header from './components/Header';
import Footer from './components/Footer';


const style = {
  bg: `p-4 bg-white`,
  container: `h-full bg-white max-w-3xl mx-auto border p-4 shadow-md rounded-xl`,
  heading: `text-center text-xl font-thin mb-4`,
  form: `max-w-xl mx-auto flex flex-col justify-center space-y-4`,
  input: `border border-gray-400 rounded-lg px-2 h-8 focus:outline-none`,
  btnContainer: `flex justify-between space-x-4`,
  input2: `border border-gray-400 rounded-lg px-2 w-full h-8 focus:outline-none`,
  button: `mx-auto px-4 p-2 rounded-xl bg-green-400 text-white`,
  count: `text-center text-sm font-thin mt-12`,
}

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [input, setInput] = useState('');
  const [group, setGroup] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');

  // Create 
  const createWorkout = async (e) => {
    e.preventDefault(e);
    if(input === '') {
      alert('Input cannot be empty!')
      return
    } 
    await addDoc(collection(db, 'workouts'), {
      text: input,
      group: group,
      sets: sets,
      reps: reps,
      completed: false,
    })
    setInput('')
  };

  // Read 
  useEffect(() => {
    const q = query(collection(db, 'workouts'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let workoutsArr = []
      querySnapshot.forEach((doc) => {
        workoutsArr.push({...doc.data(), id: doc.id})
      });
      setWorkouts(workoutsArr)
    })
    return () => unsubscribe
  }, [])

  // Update 
  const toggleComplete = async (workout) => {
    await updateDoc(doc(db, 'workouts', workout.id), {
      completed: !workout.completed
    })
  }

  // Delete 
  const deleteWorkout = async (id) => {
    await deleteDoc(doc(db, 'workouts', id))
  }

  return (
    <div className="App">
      <Header />
      <div className={style.bg}>
        <div className={style.container}>
          <p className={style.heading}> Workout Tracker </p>
          <form onSubmit={createWorkout}
            className={style.form}>
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className={style.input}
              type="text"
              placeholder="Exercise" />
            <input 
              value={group}
              onChange={(e) => setGroup(e.target.value)}
              className={style.input}
              type="text"
              placeholder="Group (optional)" />
            <div className={style.btnContainer}>
              <input 
                value={sets}
                onChange={(e) => setSets(e.target.value)}
                className={style.input2}
                type="text"
                placeholder="Sets" />
                <p className="py-1"> x </p>
              <input 
                value={reps}
                onChange={(e) => setReps(e.target.value)}
                className={style.input2}
                type="text"
                placeholder="Reps" />
            </div>
            <button className={style.button}>
              <AiOutlinePlus />
            </button>
          </form>
          <ul>
            {workouts.map((workout, index) => (
              <Workout 
                key={index} 
                workout={workout} 
                toggleComplete={toggleComplete} 
                deleteWorkout={deleteWorkout} />
            ))}
          </ul>
          {workouts.length < 1 ? null :           
            <p className={style.count}>{` You have ${workouts.length} exercises! `}</p>
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
