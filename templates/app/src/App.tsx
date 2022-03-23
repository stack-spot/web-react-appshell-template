import React from 'react'
import { BrowserRouter, Routes, NavLink, Route } from 'react-router-dom'

import { Menu } from './components/Menu'
import { Home } from './containers/Home'
import MenuLogo from '../public/assets/mountain.png'
import { RemoteComponent } from './core/utils/loaderMfe'
import { RemoteModule } from './core/utils/types'
import styled from './styled'

const App = () => {
  // This is an example of how a remote module should look like. For a better experience you can create a BFF to manage the remote modules

  /* Here it is an glossary for an remote input:
    remote = {
      id: unique identifier for remote module
      name: name of your choice for remote module in you Shell Application
      url: location of where you remote module is being exposed
      scope: name of the apllication is being exposed ( you can find this name at webpack.config.js in ModuleFederationPlugin )
      module: content is being exposed ( you can find this name at webpack.config.js in ModuleFederationPlugin )
      path: path in you appplication to render the remote module
      icon: path to icon for sidebar menu
    }
  */

  // const remotes: RemoteModule[] = [
  //   {
  //     id: '1',
  //     name: 'App 1',
  //     url: 'http://localhost:8005/remoteEntry.js',
  //     scope: 'mfereact',
  //     module: './module',
  //     path: 'appexample',
  //     icon: MenuLogo
  //   }
  // ]

  const remotes: RemoteModule[] = []

  return (
    <>
      <BrowserRouter>
        <Menu>
          <ul>
            {!!remotes &&
              remotes.map((remote) => (
                <li key={remote.id}>
                  <NavLink to={remote?.path}>
                    <img src={remote.icon} alt={remote.name} />
                  </NavLink>
                </li>
              ))}
            <li>
              <NavLink to="home">
                <img src={MenuLogo} alt="home" />
              </NavLink>
            </li>
          </ul>
        </Menu>
        <styled.Container>
          <Routes>
            {!!remotes &&
              remotes.map((remote) => (
                <Route
                  key={remote.id}
                  path={`${remote.path}/*`}
                  element={<RemoteComponent remoteComponent={remote} />} />
            ))}
            <Route path="home" element={<Home />} />
          </Routes>
        </styled.Container>
      </BrowserRouter>
    </>
  )
}

export default App
