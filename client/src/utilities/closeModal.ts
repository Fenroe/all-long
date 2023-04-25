import state from "../state";

export const closeModal = (evt?: KeyboardEvent) => {
    if (!evt?.code || evt?.code === "Escape") {
        state.showModal = false
        document.removeEventListener('keydown', closeModal)
    }
}
