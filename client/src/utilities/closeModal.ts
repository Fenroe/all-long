import state from "../state";
import { clearFocus } from "./clearFocus";

export const closeModal = (evt?: KeyboardEvent) => {
    if (!evt?.code || evt?.code === "Escape") {
        state.showModal = false
        document.removeEventListener('keydown', closeModal)
        clearFocus()
    }
}
