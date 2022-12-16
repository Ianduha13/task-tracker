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
		<section className='w-4/6 '>
			<header className='flex justify-between items-center py-4'>
				<h1>Task {tasks.length !== 0 && tasks.length}</h1>
				<Link
					className='bg-indigo-600 px-2 py-1 rounded-sm text-sm'
					to={"/create-task"}
				>
					Create Task
				</Link>
			</header>

			<div className='grid grid-cols-3 gap-4'>
				{tasks.map((task) => (
					<section className='bg-neutral-800 p-4 rounded-md' key={task.id}>
						<header className='flex justify-between'>
							<h3>{task.title}</h3>
							<div className='flex gap-x-2'>
								<Link
									to={`/edit-task/${task.id}`}
									className='bg-zinc-600 px-2 py-1 text-xs rounded-md '
								>
									Update Task
								</Link>
								<button
									className='bg-red-500 px-2 py-1 text-xs rounded-md'
									onClick={() => handleDelete(task.id)}
								>
									Delete
								</button>
							</div>
						</header>
						<p>{task.description}</p>
					</section>
				))}
			</div>
		</section>
	)
}
export default TasksList
