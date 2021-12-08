import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import { useStyles } from './styles'

const Footer = () => {
  const styles = useStyles()
  return (
    <AppBar position='static' color='primary' className={styles.footerWrap}>
      <Container maxWidth='md'>
        <Toolbar className={styles.toolBar}>
          <Typography variant='body1' color='inherit'>
            © 2021 FoxMykyta
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Footer
