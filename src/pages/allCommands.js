import Commands from "../components/Commands"
import Layout from "@theme/Layout"
import React from "react"

function Status() {
    return (
        <Layout title={`Commands`} description="See the master list of commands and permissions straight from the bot">
            <main>
                <Commands />
            </main>
        </Layout>
    )
}

export default Status
