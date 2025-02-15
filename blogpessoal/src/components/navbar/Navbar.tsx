import { Link } from "react-router-dom"

function Navbar() {
	return (
		<>
			<div className="flex justify-center w-full sticky top-0 p-4 text-white bg-indigo-950 bg-opacity-0">
				<div className="container flex justify-between text-lg ">
					<Link
						to="/home"
						className="text-2xl font-bold
					">
						Blog Pessoal
					</Link>
					<div className="flex gap-4">
						<a href='#'>Postagens</a> 
                        <a href='#'>Temas</a> 
                        <a href='#'>Cadastrar tema Perfil</a>
                        <Link to='/login'>
							Sair
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default Navbar