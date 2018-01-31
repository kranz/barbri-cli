import React from 'react';
import { I18n } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Flag, Header, Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'

export default function Navbar () {
  return (
    <I18n ns='translations'>
      {
        (t, {i18n}) => (
          <Sidebar.Pushable as={Segment}>
            <Sidebar as={Menu} animation='overlay' direction='top' visible={true} inverted>
              <Menu.Item name='home'>
                <Link to='/'><Icon name='home' />{t('navbar.home')}</Link>
              </Menu.Item>
              <Menu.Item name='foods'>
                <Link to='/foods'><Icon name='list' />{t('navbar.foods')}</Link>
              </Menu.Item>
              <Menu.Menu position='right'>
                <Menu.Item name='itaflag'>
                  <div onClick={() => i18n.changeLanguage('it')}>
                    <Flag name='it' />
                  </div>
                </Menu.Item>
                <Menu.Item name='engflag'>
                  <div onClick={() => i18n.changeLanguage('en')}>
                    <Flag name='gb' />
                  </div>
                </Menu.Item>
                <Menu.Item name='gerflag'>
                  <div onClick={() => i18n.changeLanguage('de')}>
                    <Flag name='de' />
                  </div>
                </Menu.Item>
              </Menu.Menu>
            </Sidebar>
            <Sidebar.Pusher>
              <Segment basic>
                <Header as='h3'>Application Content</Header>
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        )
      }
    </I18n>
  )
}
