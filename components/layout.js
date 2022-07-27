import Head from "next/head"
import Navbar from "./navbar"

const Layout = ({children,router}) => {
    return(
        <div >
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title> Site vitrine</title>
            </Head>
            <Navbar/>
            <div>
                {children}
            </div>
        </div>
    )
}
export default Layout