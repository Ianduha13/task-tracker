import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTask, updateTask } from "../features/tasks/taskSlice"
import { v4 as uuid } from "uuid"
import { useNavigate, useParams } from "react-router-dom"

const TaskForm = () => {
	const [task, setTask] = useState({
		title: "",
		description: "",
	})
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const params = useParams()
	const tasks = useSelector((state) => state.tasks)
	const handleChange = (e) => {
		setTask({
			...task,
			[e.target.name]: e.target.value,
		})
	}
	useEffect(() => {
		if (params.id) {
			setTask(tasks.find((task) => task.id === params.id))
		}
	}, [params.id, tasks])

	const handleSubmit = (e) => {
		if (!params.id) {
			e.preventDefault()
			dispatch(
				addTask({
					...task,
					id: uuid(),
				})
			)
			navigate("/")
		} else {
			dispatch(updateTask(task))
		}
	}
	return (
		<form className='bg-zinc-800 max-w-sm p-4 mb-2' onSubmit={handleSubmit}>
			<label htmlFor='title' className='block text-xs font-bold mb-2'>
				Task:
			</label>
			<input
				name='title'
				type='text'
				placeholder='Title'
				onChange={handleChange}
				value={task.title}
				className='w-full p-2 rounded-md bg-zinc-600 mb-2'
			/>
			<label htmlFor='description' className='block text-xs font-bold mb-2'>
				Description
			</label>
			<textarea
				name='description'
				placeholder='description'
				onChange={handleChange}
				value={task.description}
				className='w-full p-2 rounded-md bg-zinc-600 mb-2'
			></textarea>
			<button className='bg-indigo-600 px-2 py-1 rounded-md'>Save</button>
		</form>
	)
}
export default TaskForm
