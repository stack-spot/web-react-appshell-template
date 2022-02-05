import React, { ReactNode } from 'react'
import { MenuContainer, MenuLogo } from './styles'
import Logo from '../../../public/assets/logo.png'

interface MenuProps {
  children: ReactNode
}

export function Menu({ children }: MenuProps) {
  return (
    <MenuContainer>
      <MenuLogo>
        <img src={Logo} alt="Logo Citric" />
      </MenuLogo>
      {children}
    </MenuContainer>
  )
}
