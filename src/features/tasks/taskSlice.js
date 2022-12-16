import { createSlice } from "@reduxjs/toolkit"

const initialState = [
	{
		id: "1",
		title: "Task 1",
		description: "Task 1 description",
		completed: false,
	},
	{
		id: "2",
		title: "Task 2",
		description: "Task 2 description",
		completed: false,
	},
]
export const taskSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		addTask: (state, action) => {
			state.push(action.payload)
		},
		deleteTask: (state, action) => {
			const taskFound = state.find((task) => task.id === action.payload)
			if (taskFound) {
				state.splice(state.indexOf(taskFound), 1)
			}
		},
		updateTask: (state, action) => {
			const { id, title, description } = action.payload
			const foundTask = state.find((task) => task.id === id)
			if (!foundTask) {
				return
			} else {
				foundTask.title = title
				foundTask.description = description
			}
		},
	},
})

export const { addTask, deleteTask, updateTask } = taskSlice.actions
export default taskSlice.reducer
