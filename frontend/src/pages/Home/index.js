import React from 'react'
import { useHistory } from 'react-router-dom'

const Home = ({ token }) => {
	const history = useHistory()

	const handleExit = () => {
		localStorage.removeItem('token')
		history.push('/')
	}

	return (
		<div>
			<div>
				<label>LOGO</label>
				<button onClick={handleExit}>Sair</button>
			</div>
		</div>
	)
}

export default Home
