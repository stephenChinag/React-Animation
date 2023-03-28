import React from "react";

import "./Backdrop.css";

const backdrop = (props) => {
	const styles = ["Backdrop", props.show ? "BackdropOpen" : "BackdropClose"];
	return <div className={styles.join(" ")}></div>;
};
export default backdrop;
