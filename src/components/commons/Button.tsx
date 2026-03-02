
import { Button as MTButton } from "@material-tailwind/react";

interface DefaultButtonProps{
    name: string;
    onClick?: () => void

}
export const DefaultButton = ({name, onClick}:DefaultButtonProps ) => {
    console.log("clicked on button")
    return(
        <>
        <MTButton onClick={onClick}>
        {name}
        </MTButton>
        </>
    )
}

