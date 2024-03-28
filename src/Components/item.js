import React from "react";
import { FaTrash } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import styles from "./item.module.css";

const item = ({ task, onDone, onDelete }) => {
  return (
    <li className={styles.item}>
      {task.status === "Pending" ? <p>{task.name}</p> : <del>{task.name}</del>}
      <div>
        <button>
          <MdDone style={{ color: "green" }} onClick={()=>{
            onDone(task.id);
          }} />
        </button>
        <button>
          <FaTrash style={{ color: "red" }} onClick={()=>{
            onDelete(task.id);
          }} />
        </button>
      </div>
    </li>
  );
};

export default item;
