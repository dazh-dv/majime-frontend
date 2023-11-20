import Logo from "@components/logo";
import styles from "./index.module.css";
import {
  Col,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Navbar,
} from "react-bootstrap";
import NavLink from "./nav-link";
import UserItem from "@components/user-item";

export default function Nav() {
  return (
    <Navbar className={styles.bar_top + " p-0"}>
      <Container className="h-100 p-0">
        <Col>
          <Logo />
        </Col>
        <Col className="d-none d-xl-flex justify-content-center gap-1 h-100">
          <NavLink to="/" title="Inicio" />
          <NavLink to="/series" title="Series" />
        </Col>
        <Col className="d-none d-lg-flex justify-content-end">
          <Dropdown>
            <DropdownToggle className={styles.user_sec} as={"div"}>
              <UserItem />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Another actio</DropdownItem>
              <DropdownItem>Another actio</DropdownItem>
              <DropdownItem>Another actio</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Col>
      </Container>
    </Navbar>
  );
}
