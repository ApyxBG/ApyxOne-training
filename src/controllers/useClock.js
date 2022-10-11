import { useEffect, useState } from "react";

function useClock() {
	const [time, setTime] = useState(new Date());
	useEffect(() => {
		let interval = setInterval(() => {
			setTime(new Date());
		}, 1000);
		return () => clearInterval(interval);
	}, []);
	return time;
}

export default useClock;
