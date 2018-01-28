import React from 'react'
import { Message, Icon } from 'semantic-ui-react'
import styles from './styles.css'

const NotFound = () => (
  <Message negative size='massive' className={styles.errormsg}>
    <Message.Header>
      <h1>404</h1>
      <p>Page not found</p>
    </Message.Header>
    <Icon name='frown' size='massive' className={styles.iconCenter} />
  </Message>
)

export default NotFound
