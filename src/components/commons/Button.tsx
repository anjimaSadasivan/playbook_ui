import { Button as MTButton } from '@material-tailwind/react'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

type MTButtonProps = ComponentPropsWithoutRef<typeof MTButton>

interface DefaultButtonProps extends Partial<MTButtonProps> {
  children: ReactNode
}

export const DefaultButton = ({ children, ...props }: DefaultButtonProps) => {
  return <MTButton {...(props as MTButtonProps)}>{children}</MTButton>
}
