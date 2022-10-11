import { Background, Modal } from "../styles/Modal";

function ModalView({ children }) {
	return (
        <Modal>
            <Background></Background>
            {children}
        </Modal>
	);
}

export default ModalView;