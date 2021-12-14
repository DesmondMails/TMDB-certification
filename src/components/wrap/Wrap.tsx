import { FC } from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'

const Wrap: FC = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

export default Wrap
