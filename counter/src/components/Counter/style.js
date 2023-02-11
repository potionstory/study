import styled from "styled-components";

export const CounterWrap = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
`;

export const CounterBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px 0;
	width: 200px;
	h1 {
		margin: 0;
		height: 200px;
		border: 4px solid grey;
		border-radius: 10px;
		box-sizing: border-box;
		font-size: 100px;
		font-weight: bold;
		line-height: 200px;
		text-align: center;
		vertical-align: top;
	}
`;

export const ButtonWrap = styled.span`
	display: flex;
	align-items: center;
	gap: 0 10px;
	button {
		flex: 1;
		padding: 0;
		height: 40px;
		border: 0;
		border-radius: 5px;
		box-sizing: border-box;
		font-size: 50px;
		color: white;
		line-height: 40px;
		-webkit-appearance: none;
		vertical-align: baseline;
		cursor: pointer;
		&.minus {
			background-color: #f765a3;
		}
		&.plus {
			background-color: #165baa;
		}
	}
`;
