import AnchorLink from "react-anchor-link-smooth-scroll"
import './LinksStyles.css';
import { SelectedPage } from "../../Types/Types";

type Props = {
    page: string;
    selectedPage: string;
    setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({page, selectedPage, setSelectedPage}: Props) => {
  const lowerCasePage = page.toLocaleLowerCase().replace(/ /g, "") as SelectedPage
  
  return (
    <AnchorLink
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
        className={`${selectedPage === lowerCasePage ? "nav-links-active" : "nav-links"}`}
    >
        {page}
    </AnchorLink>
  )
}

export default Link