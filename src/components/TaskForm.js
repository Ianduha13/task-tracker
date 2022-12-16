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
	}, [])

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
		<form onSubmit={handleSubmit}>
			<input
				name='title'
				type='text'
				placeholder='Title'
				onChange={handleChange}
				value={task.title}
			/>
			<textarea
				name='description'
				placeholder='description'
				onChange={handleChange}
				value={task.description}
			></textarea>
			<button>Save</button>
		</form>
	)
}
export default TaskForm
