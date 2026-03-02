import { Button as MTButton } from '@material-tailwind/react'
import { ComponentProps } from 'react'

type DefaultButtonProps = ComponentProps<typeof MTButton> & {
  name: string
}
export const DefaultButton = ({ name, onClick }: DefaultButtonProps) => {
  return (
    <>
      <MTButton onClick={onClick}>{name}</MTButton>
    </>
  )
}
