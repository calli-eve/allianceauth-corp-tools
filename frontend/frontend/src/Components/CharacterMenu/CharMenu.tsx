import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export interface CharMenuItemProps {
  name: string;
  link: string;
}

export interface CharCategoryProps {
  name: string;
  links: Array<CharMenuItemProps>;
}

export interface CharMenuProps extends Partial<HTMLElement> {
  isLoading: boolean;
  data: Array<CharCategoryProps>;
  error: boolean;
  characterID: string;
}

const CharMenu = ({ data, characterID }: CharMenuProps) => {
  return (
    <>
      <Nav.Item>
        <LinkContainer to={`/audit/r_beta/${characterID}/account/overview`}>
          <Nav.Link key="Overview">Overview</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      {/* <Nav.Item>
        <LinkContainer to={`/audit/r_beta/${characterID}/account/status`}>
          <Nav.Link key="Status">Status</Nav.Link>
        </LinkContainer>
      </Nav.Item> */}
      {/* <Nav.Item>
        <LinkContainer to={`/audit/r_beta/${characterID}/account/pubdata`}>
          <Nav.Link key="Public Data">Public Data</Nav.Link>
        </LinkContainer>
      </Nav.Item> */}
      {data &&
        data.map((cat: any) => {
          return (
            <NavDropdown id={cat.name} title={cat.name} key={cat.name}>
              {cat.links.map((link: any) => {
                return (
                  <LinkContainer to={`/audit/r_beta/${characterID}/${link.link}`}>
                    <NavDropdown.Item id={link.name} key={link.name}>
                      {link.name}
                    </NavDropdown.Item>
                  </LinkContainer>
                );
              })}
            </NavDropdown>
          );
        })}
    </>
  );
};

export default CharMenu;
