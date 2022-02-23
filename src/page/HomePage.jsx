import { Link, Outlet } from "react-router-dom";
import { NavItem } from "./Home.styled";
import { NavList } from "./Home.styled";

export function Home() {
    return (<>
        <nav>
            <NavList>
                <NavItem>
                    <Link to='/'>
                       Home 
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to='/counter'>
                        Counter
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to='/dropdown'>
                        Dropdown
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to='/colorPicker'>
                        ColorPicker
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to='/todoList'>
                        TodoList
                    </Link>
                </NavItem>
                 <NavItem>
                    <Link to='/form'>
                        Form
                    </Link>
                </NavItem>
                 <NavItem>
                    <Link to='/clock'>
                        Clock
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to='/reader'>
                        Reader
                    </Link>
                </NavItem>
            </NavList>
        </nav>
    <Outlet />
    </>
    )
}