import { useSelector } from "react-redux"

const TasksList = () => {
	const tasks = useSelector((state) => state.tasks)
	console.log(tasks)
	return (
		<section className='taskslist'>
			{tasks.map((task) => (
				<section className='task' key={task.id}>
					<h3>{task.title}</h3>
					<p>{task.description}</p>
				</section>
			))}
		</section>
	)
}
export default TasksList
