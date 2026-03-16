import { LayoutContainer } from "./LayoutContainer"
import ButtonComponent from "./ButtonComponent"
import Logo from '../assets/logo-dark.svg'
import LogoLight from '../assets/logo-light.svg'
const NavigationComponent = ({theme}) => {
    const logo = theme === 'dark' ? LogoLight : Logo
    const buttonTheme = theme === 'dark' ? 'purple' : 'blue';

    return (
        <LayoutContainer additionalClasses="py-6">
        <nav className="flex max-h-14.75 h-full items-center justify-between ">
            <img src={logo} alt="Logo" />
            <ButtonComponent theme={buttonTheme} title="Get Started" />
        </nav>
        </LayoutContainer>
    )
}

export default NavigationComponent