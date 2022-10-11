import { Container, Content } from "../../styles/Main";

function MainContainer({ children /*, ...restProps*/ }) {
	return (
		<Container>
			<Content>{children}</Content>
		</Container>
	);
}

export default MainContainer;
