import { useRef, useEffect } from "react";

export const useOutsideClick = (callback: Function) => {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClick = (evt: MouseEvent) => {
            if (containerRef.current && evt.target instanceof HTMLElement && !containerRef.current.contains(evt.target)) {
                callback()
            }
        }

        document.addEventListener('mousedown', handleClick)

        return () => document.removeEventListener('mousedown', handleClick)

    }, [containerRef])

    return containerRef
}

