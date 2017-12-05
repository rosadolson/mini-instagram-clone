import React from 'react'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'center'
  },
  header: {
    fontFamily: 'Lobster, cursive',
    fontSize: '5em',
    borderLeft: '3px solid #ecf0f1',
    paddingLeft: '5%'
  },
  image: {
    width: '60px',
    paddingRight: '3%'
  }
}

const Header = () => 
  <div style={styles.container}>
    <img style={styles.image} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk6bwvuI_8obQJ2I09iOb1cBIt_Jte_fV2ShGPX-yfjtw--IYm' />
    <h1 style={styles.header}>Instagram Clone</h1>
  </div>

export default Header
