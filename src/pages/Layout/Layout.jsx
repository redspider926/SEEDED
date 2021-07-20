import React from "react";
import { Grid } from "@material-ui/core";
import Scroll from 'react-scroll';
import { Logo, Tab, Button, Container } from "../../components";
import { useWindowWidth } from '../../hooks';

import MenuIcon from '../../assets/Svg/bar.svg'
import MenuCloseIcon from '../../assets/Svg/close.svg'
import MediumIcon from '../../assets/Svg/social-medium.svg'
import TelegramIcon from '../../assets/Svg/social-telegram.svg'
import TwitterIcon from '../../assets/Svg/social-twitter.svg'
import RedditIcon from '../../assets/Svg/social-reddit.svg'

import IncubatorIcon from '../../assets/Svg/incubator.svg'
import BorrowingIcon from '../../assets/Svg/borrowing.svg'
import LendingIcon from '../../assets/Svg/lending.svg'
import StakingIcon from '../../assets/Svg/staking.svg'

import InvestorsIcon from '../../assets/Svg/investors.svg'
import ProjectsIcon from '../../assets/Svg/projects.svg'

const Layout = ({ children }) => {
  const width = useWindowWidth();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [productOpen, setProductOpen] = React.useState(false);
  const [solutionOpen, setSolutionOpen] = React.useState(false);
  const [menuContent, setMenuContent] = React.useState(1);
  const [menuLeft, setMenuLeft] = React.useState(-88);
  const [menuOpacity, setMenuOpacity] = React.useState(0);

  const Element = Scroll.Element;

  const ProductsRenderMenu = () => {
    return <>
      <a className="layout-header__mobile-menu__menu-item__menu-childitem-desktop" href="/">
        <img className="layout-header__mobile-menu__menu-item__menu-childitem-desktop-icon" src={IncubatorIcon} alt="incubator-icon" width={30} />
        <div>
          <div className="text-black text-sm">Incubator</div>
          <div className="text-gray text-xs">Discover projects currently in the Incubation.</div>
        </div>
      </a>
      <a className="layout-header__mobile-menu__menu-item__menu-childitem-desktop" href="/">
        <img className="layout-header__mobile-menu__menu-item__menu-childitem-desktop-icon" src={BorrowingIcon} alt="incubator-icon" width={30} />
        <div>
          <div className="text-black text-sm">Borrowing</div>
          <div className="text-gray text-xs">Borrow tokens by over-collateralizing</div>
        </div>
      </a>
      <a className="layout-header__mobile-menu__menu-item__menu-childitem-desktop" href="/">
        <img className="layout-header__mobile-menu__menu-item__menu-childitem-desktop-icon" src={LendingIcon} alt="incubator-icon" width={30} />
        <div>
          <div className="text-black text-sm">Lending</div>
          <div className="text-gray text-xs">Lend tokens for exclusive rewards.</div>
        </div>
      </a>
      <a className="layout-header__mobile-menu__menu-item__menu-childitem-desktop" href="/">
        <img className="layout-header__mobile-menu__menu-item__menu-childitem-desktop-icon" src={StakingIcon} alt="incubator-icon" width={30} />
        <div>
          <div className="text-black text-sm">Staking</div>
          <div className="text-gray text-xs">Stake your tokens for access to our incubator.</div>
        </div>
      </a>
    </>
  }

  const SolutionsRenderMenu = () => {
    return <>
      <a className="layout-header__mobile-menu__menu-item__menu-childitem-desktop" href="/">
        <img className="layout-header__mobile-menu__menu-item__menu-childitem-desktop-icon" src={InvestorsIcon} alt="incubator-icon" width={30} />
        <div>
          <div className="text-black text-sm">Investors</div>
          <div className="text-gray text-xs">Discover our solution for Investors.</div>
        </div>
      </a>
      <a className="layout-header__mobile-menu__menu-item__menu-childitem-desktop" href="/">
        <img className="layout-header__mobile-menu__menu-item__menu-childitem-desktop-icon" src={ProjectsIcon} alt="incubator-icon" width={30} />
        <div>
          <div className="text-black text-sm">Projects</div>
          <div className="text-gray text-xs">Discover our solution for projects.</div>
        </div>
      </a>
    </>
  }

  return (
    <div className="layout">
      <div className="layout-header">
        <Container>
          <div className="layout-header_">
            <div className="layout-header__logo">
              <Logo />
            </div>
            {width > 768 ? (<>
              <div className="layout-header__tabs">
                <a href="/">
                  <Tab>About</Tab>
                </a>
                <div className="layout-header__tabs__dropdown">
                  <Tab caret onMouseEnter={() => { setMenuContent(1); setMenuLeft(-88); setMenuOpacity(1); }} onMouseLeave={() => { setMenuLeft(-88); setMenuOpacity(1); }}>Products</Tab>
                  <Tab caret onMouseEnter={() => { setMenuContent(2); setMenuLeft(55); setMenuOpacity(1); }} onMouseLeave={() => { setMenuLeft(55); setMenuOpacity(1); }}>Solutions</Tab>
                  <div className="layout-header__tabs__dropdown__menu" style={{ left: menuLeft, opacity: menuOpacity }}>
                    <div className="menu-container">
                      {menuContent === 1 ? <ProductsRenderMenu /> : <SolutionsRenderMenu />}
                    </div>
                  </div>
                </div>
                <a href="/">
                  <Tab>Blog</Tab>
                </a>
                <a href="/">
                  <Tab>Contact</Tab>
                </a>
                <div style={{ width: 50 }}></div>
                <Button header href="/">LANUNCH APP</Button>
              </div>
            </>) : (<>
              <div
                className="layout-header__mobile-menu__icon"
                onClick={() => setMenuOpen(!menuOpen)}>
                <img src={menuOpen ? MenuCloseIcon : MenuIcon} width={20} alt="menu-icon" />
              </div>
              <div className="layout-header__mobile-menu__menu" style={{ height: menuOpen ? '100vh' : 0, overflow: menuOpen ? 'scroll' : 'hidden' }}>
                <div className="layout-header__mobile-menu__menu-item">About</div>

                <div className={`layout-header__mobile-menu__menu-item menu-arrow ${productOpen && "menu-arrow-open"}`} onClick={() => setProductOpen(!productOpen)}>Products</div>

                <div className="layout-header__mobile-menu__menu-item__menu" style={{ height: productOpen ? 224 : 0 }}>
                  <div className="layout-header__mobile-menu__menu-item__menu-childitem">
                    <img className="layout-header__mobile-menu__menu-item__menu-childitem-icon" src={IncubatorIcon} alt="incubator-icon" width={30} />
                    <div className="text-white text-sm">Incubator</div>
                  </div>
                  <div className="layout-header__mobile-menu__menu-item__menu-childitem">
                    <img className="layout-header__mobile-menu__menu-item__menu-childitem-icon" src={BorrowingIcon} alt="incubator-icon" width={30} />
                    <div className="text-white text-sm">Borrowing</div>
                  </div>
                  <div className="layout-header__mobile-menu__menu-item__menu-childitem">
                    <img className="layout-header__mobile-menu__menu-item__menu-childitem-icon" src={LendingIcon} alt="incubator-icon" width={30} />
                    <div className="text-white text-sm">Lending</div>
                  </div>
                  <div className="layout-header__mobile-menu__menu-item__menu-childitem">
                    <img className="layout-header__mobile-menu__menu-item__menu-childitem-icon" src={StakingIcon} alt="incubator-icon" width={30} />
                    <div className="text-white text-sm">Staking</div>
                  </div>
                </div>

                <div className={`layout-header__mobile-menu__menu-item menu-arrow ${solutionOpen && "menu-arrow-open"}`} onClick={() => setSolutionOpen(!solutionOpen)}>Solutions</div>

                <div className="layout-header__mobile-menu__menu-item__menu" style={{ height: solutionOpen ? 109 : 0 }}>
                  <div className="layout-header__mobile-menu__menu-item__menu-childitem">
                    <img className="layout-header__mobile-menu__menu-item__menu-childitem-icon" src={InvestorsIcon} alt="incubator-icon" width={30} />
                    <div className="text-white text-sm">Investors</div>
                  </div>
                  <div className="layout-header__mobile-menu__menu-item__menu-childitem">
                    <img className="layout-header__mobile-menu__menu-item__menu-childitem-icon" src={ProjectsIcon} alt="incubator-icon" width={30} />
                    <div className="text-white text-sm">Projects</div>
                  </div>
                </div>

                <div className="layout-header__mobile-menu__menu-item">Blog</div>

                <div className="layout-header__mobile-menu__menu-item">Contact</div>
              </div>
            </>)}
          </div>
        </Container>
      </div >

      <div className="layout-left-box">
        <a href="/">
          <img src={MediumIcon} alt="medium-icon" className="layout-left-box__icon" width={15} />
        </a>
        <a href="/">
          <img src={TelegramIcon} alt="medium-icon" className="layout-left-box__icon" width={15} />
        </a>
        <a href="/">
          <img src={TwitterIcon} alt="medium-icon" className="layout-left-box__icon" width={15} />
        </a>
        <a href="/">
          <img src={RedditIcon} alt="medium-icon" className="layout-left-box__icon" width={15} />
        </a>
        <div className="layout-left-box__text text-white">FOLLOW</div>
      </div>

      <div className="layout-body">
        {children}
      </div>

      <Element name="footer">
        <div className="layout-footer">
          <Container>
            <Grid container spacing={10}>
              <Grid item xs={6} md={3}>
                <div className="layout-footer__title text-white text-md text-bold">Products</div>
                <a className="layout-footer__link text-light text-sm" href="/">Incubator</a>
                <a className="layout-footer__link text-light text-sm" href="/">Borrowing</a>
                <a className="layout-footer__link text-light text-sm" href="/">Lending</a>
                <a className="layout-footer__link text-light text-sm" href="/">Staking</a>
              </Grid>
              <Grid item xs={6} md={3}>
                <div className="layout-footer__title text-white text-md text-bold">Solutions</div>
                <a className="layout-footer__link text-light text-sm" href="/">Investors</a>
                <a className="layout-footer__link text-light text-sm" href="/">Projects</a>
              </Grid>
              <Grid item xs={6} md={3}>
                <div className="layout-footer__title text-white text-md text-bold">About</div>
                <a className="layout-footer__link text-light text-sm" href="/">What is Seeded?</a>
                <a className="layout-footer__link text-light text-sm" href="/">Whitepaper</a>
                <a className="layout-footer__link text-light text-sm" href="/">Team</a>
                <a className="layout-footer__link text-light text-sm" href="/">Careers</a>
              </Grid>
              <Grid item xs={6} md={3}>
                <div className="layout-footer__title text-white text-md text-bold">Legal</div>
                <a className="layout-footer__link text-light text-sm" href="/">Privacy</a>
                <a className="layout-footer__link text-light text-sm" href="/">Teams</a>
                <a className="layout-footer__link text-light text-sm" href="/">Sitemap</a>
              </Grid>
            </Grid>

            <div className="layout-footer__bottom">
              <div className="layout-footer__bottom__social-view">
                <a className="layout-footer__bottom__social-view__icon" href="/">
                  <img src={MediumIcon} alt="medium-icon" width="100%" height="100%" />
                </a>
                <a className="layout-footer__bottom__social-view__icon" href="/">
                  <img src={TelegramIcon} alt="medium-icon" width="100%" height="100%" />
                </a>
                <a className="layout-footer__bottom__social-view__icon" href="/">
                  <img src={TwitterIcon} alt="medium-icon" width="100%" height="100%" />
                </a>
                <a className="layout-footer__bottom__social-view__icon" href="/">
                  <img src={RedditIcon} alt="medium-icon" width="100%" height="100%" />
                </a>
              </div>
              <div className="layout-footer__bottom__copyright text-light text-sm">© 2021 Seeded Network</div>
            </div>
          </Container>
        </div>
      </Element>
    </div >
  );
};

export default Layout;
