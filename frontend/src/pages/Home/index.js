import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import api from '../../services/api'
import TaskCard from '../../components/TaskCard'

const Home = () => {
	const history = useHistory()
	const token = localStorage.getItem('token')
	const [ tasks, setTasks ] = useState([])

	useEffect(() => {
		const load = async () => {
		try {
			const response = await api.get('/user/task', { headers: { token } })
			if(response.status === 200) setTasks(response.data.tasks)
		} catch ({response}) {
			alert(response.data.error)
		}
	}
	load()
	}, [])

	return (
		<div>
			<h3>Minhas tarefas</h3>

			{
			tasks && tasks.map(task => (
				<TaskCard key={task.id} task={task}/>
			))
			}

			<div>
				<button onClick={() => history.push('/create-task')}>Criar tarefa</button>
			</div>
		</div>
	)
}

export default Home
