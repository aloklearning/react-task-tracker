import ReactSwitch from "react-switch";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkLightSwitch = ({ theme, onToggle }) => {
    const SunIcon = () => {
        return(
            <FaSun 
                size={18} 
                color='#f4f4f4'
                style={{ marginTop: '5px', marginLeft: '7px' }}
            />
        )
    }

    const MoonIcon = () => {
        return(
            <FaMoon 
                size={15} 
                color='#f4f4f4'
                style={{ marginTop: '6px', marginLeft: '7px' }}
            />
        )
    }

    return(
        <div className='theme-switch'>
            <ReactSwitch 
                onChange={onToggle} 
                checkedIcon={<SunIcon />}
                checked={theme === 'dark'}
                uncheckedIcon={<MoonIcon />}
            />
        </div>
    );
}

export default DarkLightSwitch;