import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTask } from "../features/tasks/taskSlice"

const TaskForm = () => {
	const [task, setTask] = useState({
		title: "",
		description: "",
	})
	const dispatch = useDispatch()
	const handleChange = (e) => {
		setTask({
			...task,
			[e.taget.name]: e.target.value,
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(addTask(task))
	}
	return (
		<form onSubmit={handleSubmit}>
			<input
				name='title'
				type='text'
				placeholder='Title'
				onChange={handleChange}
			/>
			<textarea
				name='description'
				placeholder='description'
				onChange={handleChange}
			></textarea>
			<button>Save</button>
		</form>
	)
}
export default TaskForm
