import React from 'react';
import { Link } from 'react-router-dom'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

export default function Navbar () {
  return (
    <Sidebar.Pushable as={Segment}>
      <Sidebar as={Menu} animation='overlay' direction='top' visible={true} inverted>
        <Menu.Item name='home'>
          <Icon name='home' />
          <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item name='products'>
          <Icon name='list' />
          <Link to='/products'>Products</Link>
        </Menu.Item>
      </Sidebar>
      <Sidebar.Pusher>
        <Segment basic>
          <Header as='h3'>Application Content</Header>
        </Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  )
}
