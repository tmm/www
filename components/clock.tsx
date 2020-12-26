import { useState } from 'react'
import { useInterval } from 'react-use'

export const Clock: React.FC = () => {
    const now = new Date()
    const [hours, setHours] = useState<number>(now.getHours())
    const [minutes, setMinutes] = useState<number>(now.getMinutes())

    useInterval(() => {
        const now = new Date()
        setHours(now.getHours())
        setMinutes(now.getMinutes())
    }, 1000)

    return (
        <div
            className="
                absolute
                font-medium
                font-sans
                proportional-nums
                right-4
                text-border
                text-xs
                top-2
                tracking-wide
            "
        >
            {hours < 10 ? `0${hours}` : hours}:
            {minutes < 10 ? `0${minutes}` : minutes}
        </div>
    )
}
