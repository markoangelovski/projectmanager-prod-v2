import React from "react";
import moment from "moment";
import {
  FaBan,
  FaCheck,
  FaStickyNote,
  FaLink,
  FaRegClock
} from "react-icons/fa";

import {
  TaskBody,
  TaskDetailWrapper,
  TaskTitle,
  TaskDetail,
  TaskDescription,
  TaskLink,
  TaskDetailCount
} from "./TaskDetailsItem.styles";

const TaskListItem = ({ task }) => {
  return (
    <TaskBody>
      <TaskDetailWrapper>
        <TaskTitle>{task.title}</TaskTitle>
        <TaskDetail>{moment(task.date).format("MMM Do, 'YY.")}</TaskDetail>
      </TaskDetailWrapper>
      <TaskDetail>Program Lead:</TaskDetail>
      <TaskDescription>{task.pl}</TaskDescription>
      <TaskDetail>Description:</TaskDetail>
      <TaskDescription>{task.description}</TaskDescription>
      <TaskDetail>Due date:</TaskDetail>
      <TaskDescription>
        {moment(task.dueDate).format("MMM Do, 'YY.")}
      </TaskDescription>
      <TaskDetail>Column:</TaskDetail>
      <TaskDescription>{task.column}</TaskDescription>
      <TaskDetail>NAS:</TaskDetail>
      <TaskDescription>{task.nas}</TaskDescription>
      <TaskDetail>Kanboard:</TaskDetail>
      <TaskDescription>
        <TaskLink href={task.kanboard} target="_blank">
          {task.kanboard}
        </TaskLink>
      </TaskDescription>
      <TaskDetailCount>
        <TaskDetailWrapper>
          <div>
            {task.done ? <FaCheck /> : <FaBan />}
            <FaStickyNote />
            {task.notes.length} <FaLink />
            {task.links.length} <FaRegClock />
            {task.events.length}
          </div>
        </TaskDetailWrapper>
      </TaskDetailCount>
    </TaskBody>
  );
};

export default TaskListItem;