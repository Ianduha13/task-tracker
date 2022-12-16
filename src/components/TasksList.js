import { useSelector, useDispatch } from "react-redux"
import { deleteTask } from "../features/tasks/taskSlice"
import { Link } from "react-router-dom"

const TasksList = () => {
	const tasks = useSelector((state) => state.tasks)
	const dispatch = useDispatch()
	const handleDelete = (id) => {
		dispatch(deleteTask(id))
	}
	return (
		<section className='taskslist'>
			<header>
				<h1>Task {tasks.length !== 0 && tasks.length}</h1>
				<Link to={"/create-task"}>Create Task</Link>
			</header>
			{tasks.map((task) => (
				<section className='task' key={task.id}>
					<h3>{task.title}</h3>
					<p>{task.description}</p>
					<button onClick={() => handleDelete(task.id)}>Delete</button>
				</section>
			))}
		</section>
	)
}
export default TasksList
