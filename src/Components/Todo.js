// import React, { useState } from "react";
// import styles from "./Todo.module.css";
// import Item from "./item";

// const Todo = () => {
//   const tasks = JSON.parse(localStorage.getItem("tasks"));
//   const [list, setlist] = useState(tasks ? [tasks] : []);

//   const [input, setinput] = useState("");

//   const changeHandler = (e) => {
//     setinput(e.target.value);
//   };

//   const addTask = (e) => {
//     e.preventDefault();
//     const newTask = {
//       id: Math.random() * 34567678788,
//       name: input,
//       status: "Pending",
//     };
//    const prevTask= list;
//     // Update the list state by spreading the previous list and adding the new task
//     setlist([...prevTask, newTask]);

//     // Clear the input after adding the task
//     setinput("");
//     localStorage.setItem("tasks", JSON.stringify(...prevTask, newTask));
//   };

//   const clearAllHandler = () => {
//     setlist([]);
//   };

//   const markDoneHandler = (id) => {
//     const updatedList = list.map((element) => {
//       if (element.id === id) element.status = "Completed";
//       return element;
//     });
//     setlist(updatedList);
//   };
//   const markDeleteHandler = (id) => {
//     const updatedList = list.filter((element) => {
//       return element.id !== id;
//     });
//     setlist(updatedList);
//   };

//   return (
//     <div className={styles.mainContainer}>
//       <div className={styles.inputBox}>
//         <h1>To Do List</h1>
//         <div>
//           <p>Enter Your Tasks Here ✏️</p>
//           <form>
//             <input
//               type="text"
//               placeholder="Enter Task"
//               value={input}
//               onChange={changeHandler}
//             />
//             <button onClick={addTask}>Submit</button>
//           </form>
//         </div>
//       </div>
//       <h4>Your Tasks</h4>
//       <ul>
//         {list.map((element) => (
//           <Item
//             task={element}
//             onDone={markDoneHandler}
//             onDelete={markDeleteHandler}
//           />
//         ))}
//       </ul>
//       {list.length !== 0 && (
//         <div>
//           <button className={styles.clearAll} onClick={clearAllHandler}>
//             ClearAll
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Todo;

import React, { useState } from "react";
import styles from "./Todo.module.css";
import Item from "./item";

const Todo = () => {
  const storedTasks = JSON.parse(localStorage.getItem("tasks"));
  // Initialize list state with stored tasks or an empty array if there are no tasks
  const [list, setList] = useState(storedTasks || []);

  const [input, setInput] = useState("");

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: Math.random() * 34567678788,
      name: input,
      status: "Pending",
    };
    // Update the list state by spreading the previous list and adding the new task
    setList([...list, newTask]);
    // Clear the input after adding the task
    setInput("");
    // Update tasks in local storage with the updated list
    localStorage.setItem("tasks", JSON.stringify([...list, newTask]));
  };

  const clearAllHandler = () => {
    setList([]);
    // Clear tasks in local storage
    localStorage.removeItem("tasks");
  };

  const markDoneHandler = (id) => {
    const updatedList = list.map((element) => {
      if (element.id === id) element.status = "Completed";
      return element;
    });
    setList(updatedList);
    // Update tasks in local storage with the updated list
    localStorage.setItem("tasks", JSON.stringify(updatedList));
  };

  const markDeleteHandler = (id) => {
    const updatedList = list.filter((element) => {
      return element.id !== id;
    });
    setList(updatedList);
    // Update tasks in local storage with the updated list
    localStorage.setItem("tasks", JSON.stringify(updatedList));
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.inputBox}>
        <h1>To Do List</h1>
        <div>
          <p>Enter Your Tasks Here ✏️</p>
          <form>
            <input
              type="text"
              placeholder="Enter Task"
              value={input}
              onChange={changeHandler}
            />
            <button onClick={addTask}>Submit</button>
          </form>
        </div>
      </div>
      <h4>Your Tasks</h4>
      <ul>
        {list.map((element) => (
          <Item
            // key={element.id}
            task={element}
            onDone={markDoneHandler}
            onDelete={markDeleteHandler}
          />
        ))}
      </ul>
      {list.length !== 0 && (
        <div>
          <button className={styles.clearAll} onClick={clearAllHandler}>
            Clear All
          </button>
        </div>
      )}
    </div>
  );
};

export default Todo;

