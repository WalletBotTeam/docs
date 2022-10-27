import React, { useEffect, useState } from "react"

import axios from "axios"
import styles from "./index.module.css"

function BotStatus() {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState({})

    useEffect(() => {
        fetch()
            .then((data) => {
                setData(data)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [])

    const fetch = async () => {
        try {
			
            return (await axios.get(`https://api.walletbot.pro/v0/commands`)).data
        } catch (_) {
            return []
        }
    }

    if (isLoading)
        return (
            <div className={styles.section}>
                <h1>Loading ...</h1>
            </div>
        )

    return <section className={styles.section}>{JSON.stringify(data)}</section>
}

export default BotStatus
