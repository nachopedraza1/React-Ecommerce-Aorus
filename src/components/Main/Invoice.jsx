import { useEffect } from "react"

export const Invoice = ({ getOrderData }) => {

    useEffect(() => {
        getOrderData()
    }, [])

    return (
        <div>
            <div>

            </div>
        </div>
    )
}
