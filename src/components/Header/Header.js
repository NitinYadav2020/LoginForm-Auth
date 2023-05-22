import React, { useContext } from "react";
import { AuthContext } from "../../context/UserAuthContext";
import { useNavigate } from "react-router-dom";

export const Header = () => {
	const { logOut, user } = useContext(AuthContext)
	const navigate = useNavigate()

	const handleLogout = async () => {
		await logOut()
		navigate('/login')
	}

	return (<>
		<div className='headerMain'>
			<h1 class="app-content-headerText">Products</h1>
			<img alt='' style={{
				borderRadius: "50%",
				width: "75px"
			}} src={user?.photoURL ? user.photoURL : "https://picsum.photos/75"}/>
			<div className="User">
				<h2 className='UserHeader'>{user?.displayName ? user.displayName : "User"}</h2>
				<h3 className='UserEmail'>{user?.email ? user.email : ""}</h3>
			</div>
			<button style={{
				background: "transparent",
				color: "#fff",
				height: "3rem",
				width: "3rem",
				borderRadius: "50%"
			}} onClick={handleLogout}>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
			</button>
		</div>
	</>);
};