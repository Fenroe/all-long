import { openModal } from "./openModal";
import { closeModal } from "./closeModal";

export const openModalWithListener = () => {
    openModal()
    document.addEventListener('keydown', closeModal)
}
