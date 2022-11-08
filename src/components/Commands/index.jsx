import React, { useEffect, useState } from "react"

import axios from "axios"
import styles from "./index.module.css"

function BotStatus() {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])

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

    return (
        <section className={styles.section}>
            <h1>All Commands</h1>
            <h2>This data is sourced directly from the live bot.</h2>
            <br />
            {data.map((x) => {
                return (
                    <>
                        <h3>{x.name}</h3>
                        <h5>{x.description}</h5>
                        <p>
                            Accessible by:{" "}
                            {x.collabManager
                                ? "Collab Managers"
                                : x.walletManager
                                ? "Wallet Managers"
                                : x.whitelistManager
                                ? "Whitelist Managers"
                                : x.permissions.length > 0
                                ? "People with the " + x.permissions.join(" and ") + " perms"
                                : "Anyone"}
                        </p>
                        <p>Subcommands: {x.subcommands.length > 0 ? x.subcommands.map(cmd => {{<code>/{x.name} {cmd}</code>}}) : "None"}</p>
                        <hr />
                    </>
                )
            })}
        </section>
    )
}

export default BotStatus
