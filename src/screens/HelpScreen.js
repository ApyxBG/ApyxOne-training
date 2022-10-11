import { HiOutlineChevronLeft } from "@react-icons/all-files/hi/HiOutlineChevronLeft";
import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import MainContainer from "../components/common/MainContainer";
import VerticalLine from "../components/common/VerticalLine";
import { Title } from "../styles/Card";
import { HorizontalLine } from "../styles/Common";
import { TITLE_COLOR } from "../utils/Colors";
import { getRows } from "../utils/HelpViewUtils";
import NavBar from "../views/NavBar";

function HelpScreen() {
	const location = useLocation();
	const navigate = useNavigate();
	let rows =
		location.state && location.state.view
			? getRows(location.state.view)
			: null;
	if (!rows) {
		navigate(-1);
	}
	const childRef = useRef();
	const parentRef = useRef();
	const setWidth = () => {
		let padding =
			childRef.current.offsetWidth - childRef.current.clientWidth;
		childRef.current.style.width =
			parentRef.current.offsetWidth + padding + "px";
	};
	useEffect(() => {
		const obs = new ResizeObserver(setWidth);
		obs.observe(parentRef.current);
		return () => {
			obs.disconnect();
		};
	}, []);
	return (
		<MainContainer>
			<NavBar
				leftButtons={[
					{
						onClick: () => {
							navigate(-1);
						},
						icon: (
							<HiOutlineChevronLeft
								size="85%"
								color="white"
							></HiOutlineChevronLeft>
						),
					},
				]}
			></NavBar>
			<div
				ref={parentRef}
				style={{
					width: "100%",
					overflow: "hidden",
					height: "95%",
				}}
			>
				<div
					ref={childRef}
					style={{
						overflow: "auto",
						height: "99%",
						paddingRight: "0px",
					}}
				>
					<div
						style={{
							backgroundColor: "rgb(39, 50, 78)",
							borderRadius: "1rem",
							overflow: "hidden",
							minHeight: "100%",
						}}
					>
						<Title color={TITLE_COLOR}>{rows.title}</Title>
						{rows.arr.map((row, i) => {
							return (
								<>
									<Row>
										<Left>{row.img}</Left>
										<div>
											<VerticalLine></VerticalLine>
										</div>
										<Right>{row.desc}</Right>
									</Row>
									{i < rows.arr.length - 1 ? (
										<HorizontalLine
											style={{ width: "95%" }}
										></HorizontalLine>
									) : (
										<div
											style={{
												width: "100%",
												height: "0.5rem",
											}}
										></div>
									)}
								</>
							);
						})}
					</div>
				</div>
			</div>
		</MainContainer>
	);
}

const Row = styled.div`
	display: flex;
	padding-top: 0.5rem;
	padding-bottom: 0.4rem;
`;
const Left = styled.div`
	width: 20%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Right = styled.div`
	width: 75%;
	padding-left: 1rem;
`;
export default HelpScreen;
