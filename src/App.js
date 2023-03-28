import React, { useState } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import { Transition } from "react-transition-group";

const App = () => {
	const [modalState, setModalState] = useState(false);
	const [showBolock, setShowBlock] = useState(false);

	const showModel = () => {
		setModalState(true);
	};
	const closeModel = () => {
		setModalState(false);
	};
	const showToogleHandler = () => {
		// setShowBlock(!showBolock);
		setShowBlock((prev) => !prev);
	};

	return (
		<div className="App">
			<h1>React Animations</h1>
			<button className="Button" onClick={showToogleHandler}>
				Toogle
			</button>

			<Transition in={showBolock} timeout={1300} mountOnEnters unmountOnExit>
				{(state) => (
					<div
						style={{
							background: "red",
							width: "100px",
							height: "100px",
							margin: "auto",
							transition: "opacity 1s ease-out",
							opacity: state === "exiting" ? 0 : 1,
						}}
					/>
				)}
			</Transition>

			<Modal show={modalState} closed={closeModel} />

			<Backdrop show={modalState} />

			<button className="Button" onClick={showModel}>
				Open Modal
			</button>

			<h3>Animating Lists</h3>
			<List />
		</div>
	);
};

export default App;
