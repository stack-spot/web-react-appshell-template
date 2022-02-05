import React from 'react'
import { CardContainer, CardTitle, CardLink, CardDescription } from './styled'

export const StackCard = () => {
  return (
    <>
      <CardContainer>
        <CardTitle>Stack Foundation Web</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          quaerat quasi, vitae eos laudantium quo quidem hic necessitatibus minima
          fugit quod laboriosam, nisi ex suscipit sequi eligendi magnam quis
          repudiandae?
        </CardDescription>
        <CardLink href={`https://github.com/ZupIT/stack-foundation-web`}>
          Saiba mais
        </CardLink>
      </CardContainer>
    </>
  )
} 