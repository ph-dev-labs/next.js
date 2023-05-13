import '@styles/global.css'
import { Children } from 'react'
import Nav from '@components/Nav'
import Provider from '@components/Provider'
export const metadata = {
    title: "Promtopia",
    description: "Discover & share AI Prompts"
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient'/>
            </div>
            <main className='app'>
                <Nav />
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout