import { closeModal } from "./closeModal";

export const closeModalWithListener = () => {
    closeModal()
    document.removeEventListener('keydown', closeModal)
}
