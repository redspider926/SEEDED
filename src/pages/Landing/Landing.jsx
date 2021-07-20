import React from "react";
import { Grid } from "@material-ui/core";
import Scroll from 'react-scroll';

import { Button, ProjectCard, Carousel, PageNumber, Container } from "../../components";
import { useWindowWidth } from '../../hooks';

import LineImage from '../../assets/Svg/line.svg';
import PointsImage from '../../assets/Svg/points.svg';
import ProjectCardImage1 from '../../assets/Svg/projectcard-1.svg';
import ProjectCardImage2 from '../../assets/Svg/projectcard-2.svg';
import ProjectCardImage3 from '../../assets/Svg/projectcard-3.svg';
import ChainLinkLogo from '../../assets/Svg/chainlink.svg';

const Landing = () => {
  const width = useWindowWidth();

  const Element = Scroll.Element;

  return (
    <div className="landing-page">
      <Element name="home">
        <div className="landing-page__part-1 landing-page__part">
          <div style={{flex:1}}></div>
          <Container>
            <div className="landing-page__part-1__title text-white text-lg">
              Planting the <span>seed</span> <br />
              of a better tomorrow.
            </div>
            <div className="landing-page__part-1__paragraph text-light text-sm">
              Seeded Network is a project incubator that offers a unique borrowing and lending solution allowing investors to <br />participate in the incubated project selected by the team.
            </div>
            <Button href="/">OUR WHITEPAPER</Button>
            <Grid container spacing={5}>
              <Grid item xs={12} md={3}>
                <div className="landing-page__part-1__invest-title text-white text-sm">
                  Invest in a project
                </div>
                <div className="landing-page__part-1__invest-paragraph text-light text-sm">
                  Indulge in a hand selected project, voted on by the community, to undergo the Seeded incubation process.
                </div>
                <a href="/">
                  <div className="landing-page__part-1__invest-readmore text-gray text-sm">Read more</div>
                </a>
              </Grid>
              <Grid item xs={12} md={3}>
                <div className="landing-page__part-1__incubate-title text-white text-sm">
                  Incubate your project
                </div>
                <div className="landing-page__part-1__incubate-paragraph text-light text-sm">
                  Access to a network of professional marketers, developers, advisors, auditors, graphic designers and community managers.
                </div>
                <a href="/">
                  <div className="landing-page__part-1__incubate-readmore text-gray text-sm">Read more</div>
                </a>
              </Grid>
            </Grid>
          </Container>
          <div className="landing-page__part-1__points">
            <img src={PointsImage} alt="points-img" width="100%" />
          </div>
        </div>
        <div className="landing-page__part-space"></div>
      </Element>

      <Element name="about">
        <div className="landing-page__part-2 landing-page__part">
          <Container>
            <Grid container spacing={10}>
              <Grid item xs={12} md={6}>
                <div className="landing-page__part-2__image-container">
                  <img className="landing-page__part-2__image-container-image" src={LineImage} alt="line-img" width="130%" />
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className="landing-page__part-2__title text-white text-md">What is Seeded Network?</div>
                <div className="landing-page__part-2__paragraph text-white text-sm">
                  Seeded Network is a project incubator with a unique tiered investing strategy that allows investors to select  a tier system based on their risk tolerance. This is made possible using our borrowing, lending, and staking solutions.
                </div>
                <div className="landing-page__part-2__paragraph text-white text-sm">
                  We believe in adding value to projects with a vision of disruptive technology with an impact on Decentralised Finance and Cryptocurrency.
                </div>
                <div className="landing-page__part-2__paragraph text-white text-sm">
                  Our mission is to provide our investors with quality grade projects hand selected by the Seeded Team while providing our expertise and network connections to projects wishing to be incubated through us. We have our reputation on the line so there is no room for error. Let's plant the seed of a better tomorrow, together.
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Element>

      <Element name="investors">
        <div className="landing-page__part-3 landing-page__part">
          <Container>
            <Grid container spacing={10}>
              <Grid item xs={12} md={6}>
                <div className="landing-page__part-3__title text-white text-md">Investors</div>

                <div className="landing-page__part-3__paragraph text-white text-sm">
                  Hand-selected projects that underwent the Seeded incubation process presented to you, the investor. With a unique tiering system tailored to different investors risk tolerance, we ensure there's a spot for you.
                </div>

                <Button href="/">OUR WHITEPAPER</Button>
              </Grid>

              <Grid item xs={12} md={6}>
                <div className="landing-page__part-3__cardgroup">
                  <div className="landing-page__part-3__cardgroup-card">
                    <div className="landing-page__part-3__cardgroup-card__title text-white text-md text-center">Locked Lending</div>
                    <div className="landing-page__part-3__cardgroup-card__divider" />
                    <div className="landing-page__part-3__cardgroup-card__paragraph text-light text-sm text-center">Lend your $SEEDED tokens to get boosted to the next tier. Your tokens are locked for the duration of 90 days. </div>
                  </div>

                  <div className="landing-page__part-3__cardgroup-card">
                    <div className="landing-page__part-3__cardgroup-card__title text-white text-md text-center">Flexible Staking</div>
                    <div className="landing-page__part-3__cardgroup-card__divider" />
                    <div className="landing-page__part-3__cardgroup-card__paragraph text-light text-sm text-center">Stake your $SEEDED tokens for a duration of 7 days before the launch of the incubated project. You can withdraw your staked tokens at any time. </div>
                  </div>

                  <div className="landing-page__part-3__cardgroup-card">
                    <div className="landing-page__part-3__cardgroup-card__title text-white text-md text-center">Borrow Staking</div>
                    <div className="landing-page__part-3__cardgroup-card__divider" />
                    <div className="landing-page__part-3__cardgroup-card__paragraph text-light text-sm text-center">Borrow $SEEDED tokens and stake them for a duration of 10 days before the launch of the incubated project. You can withdraw your staked tokens at any time.</div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Element>

      <Element name="projects">
        <div className="landing-page__part-4 landing-page__part">
          <Container>
            <Grid container spacing={10} direction="row-reverse">
              <Grid item xs={12} md={6}>
                <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div className="landing-page__part-4__title text-white text-md">Projects</div>

                  <div className="landing-page__part-4__paragraph text-white text-sm">As a project manager, you will be granted access to our network of professional marketers, developers, advisors, graphic designers and community moderators.</div>
                  <div className="landing-page__part-4__paragraph text-white text-sm">We will work together to ensure that your vision is made a reality. We will continue to support and market the project after launch and incorporate your project to our exclusive ecosystem.</div>
                  <div className="landing-page__part-4__paragraph text-white text-sm">We're looking forward to working with you.</div>
                  <Button href="mailto:email@example.com">Contact Us</Button>
                </div>
              </Grid>

              <Grid item xs={12} md={6}>
                <ProjectCard title="Seed" paragraph="with us." image={ProjectCardImage1} />
                <ProjectCard title="Launch" paragraph="with us." image={ProjectCardImage2} />
                <ProjectCard title="Grow" paragraph="with us." image={ProjectCardImage3} />
              </Grid>
            </Grid>
          </Container>
        </div>
      </Element>
      
      <Element name="partners">
        <div className="landing-page__part-5">
            <div className="landing-page__part-5__title text-white text-md text-center">
            Our partners
            </div>
          {width > 768 && <Carousel>
              <div className="landing-page__part-5__partner-card">
                <img src={ChainLinkLogo} alt="partner-card-img" />
              </div>

              <div className="landing-page__part-5__partner-card">
                <img src={ChainLinkLogo} alt="partner-card-img" />
              </div>

              <div className="landing-page__part-5__partner-card">
                <img src={ChainLinkLogo} alt="partner-card-img" />
              </div>

              <div className="landing-page__part-5__partner-card">
                <img src={ChainLinkLogo} alt="partner-card-img" />
              </div>

              <div className="landing-page__part-5__partner-card">
                <img src={ChainLinkLogo} alt="partner-card-img" />
              </div>

              <div className="landing-page__part-5__partner-card">
                <img src={ChainLinkLogo} alt="partner-card-img" />
              </div>
            </Carousel>}
          
            {width <= 768 && <Container>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <div className="landing-page__part-5__partner-card-mobile">
                    <img src={ChainLinkLogo} alt="partner-card-img" width={100} />
                  </div>
                </Grid>

                <Grid item xs={6}>
                  <div className="landing-page__part-5__partner-card-mobile">
                    <img src={ChainLinkLogo} alt="partner-card-img" width={100} />
                  </div>
                </Grid>

                <Grid item xs={6}>
                  <div className="landing-page__part-5__partner-card-mobile">
                    <img src={ChainLinkLogo} alt="partner-card-img" width={100} />
                  </div>
                </Grid>

                <Grid item xs={6}>
                  <div className="landing-page__part-5__partner-card-mobile">
                    <img src={ChainLinkLogo} alt="partner-card-img" width={100} />
                  </div>
                </Grid>

                <Grid item xs={6}>
                  <div className="landing-page__part-5__partner-card-mobile">
                    <img src={ChainLinkLogo} alt="partner-card-img" width={100} />
                  </div>
                </Grid>

                <Grid item xs={6}>
                  <div className="landing-page__part-5__partner-card-mobile">
                    <img src={ChainLinkLogo} alt="partner-card-img" width={100} />
                  </div>
                </Grid>
              </Grid>
            </Container>}
          </div>
      </Element>

      <PageNumber />
    </div >
  );
};

export default Landing;
