import { FC } from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'

const Wrap: FC = ({ children }) => {
  const isLogin = true
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
export default Wrap
