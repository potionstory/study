import React, { useState } from "react";
import { CounterWrap, CounterBox, ButtonWrap } from "./style";

function Counter() {
	const [counter, setCounter] = useState(0);

	const onButtonHandler = (e) => {
		if (e.target.className === "minus") {
			setCounter((prevCount) => prevCount - 1);
		} else {
			setCounter((prevCount) => prevCount + 1);
		}
	};

	return (
		<CounterWrap>
			<CounterBox>
				<h1>{counter}</h1>
				<ButtonWrap>
					<button type="button" className="minus" onClick={onButtonHandler}>
						&#8722;
					</button>
					<button type="button" className="plus" onClick={onButtonHandler}>
						&#43;
					</button>
				</ButtonWrap>
			</CounterBox>
		</CounterWrap>
	);
}

export default Counter;
