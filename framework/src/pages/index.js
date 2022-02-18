import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

import TypeIt from "typeit-react";
import { Fade, Reveal } from "react-awesome-reveal";

import LeftSvg from "../../static/img/undraw_folder_re_j0i0.svg"
import BtttomOneSvg from "../../static/img/undraw_on_the_office_re_cxds.svg"

import { SiJavascript, SiHtml5, SiCsswizardry, SiReact } from 'react-icons/si';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">

      <div className={styles.customShape}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
              className={styles.shapeFill} >
              </path>
          </svg>
      </div>

      <div className={styles.customShape16} >
            <svg data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className={styles.shapeFill}></path>
            </svg>
      </div>

        <div className="row">

          <div className={clsx('col col--6')} style={{ marginBottom: "30px", display:"flex", justifyContent:"center", alignItems: "center" }} > 

              <div className={styles.specialText}>

                <h1 className="hero__title" style={{ fontSize:"80px" }}>{siteConfig.title}</h1>
                <h3>Your site building helper</h3>

                <div className="hero__subtitle">
                  <TypeIt
                        options={{
                            strings:`<b>${siteConfig.tagline}</b>`,
                            speed: 90,
                            waitUntilVisible: true,
                            loop: true,
                            loopDelay: 2000,
                        }}
                  />
                </div>

                <br/>

                <div className={styles.buttons}>
                  <Link
                    className="button button--secondary button--lg"
                    to="/docs/intro">
                    Getting started
                  </Link>
                </div>

              </div>    

          </div>

          <div className={clsx('col col--6')} >
            <LeftSvg className={styles.leftSvg}/>
          </div>

        </div>

      </div>

    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">

      <HomepageHeader />

      {/* <main>
        <HomepageFeatures />
      </main> */}
      <br/>

      <div className="container">

        <Fade triggerOnce>
        <div className="row">

          <div className={clsx('col col--6')} style={{ marginTop: "30px" }}>
            <h3>Ready to use</h3>
            <div style={{ backgroundColor:"rgb(92,210,239)", width:"150px", height:"6px", marginBottom:"5px"}}></div>
            <h1>Various Resources</h1>
            <h3>Up to date sources and website that may enhance your working efficiency and save your time!</h3>
          </div>

          <div className={clsx('col col--6')} >
            <BtttomOneSvg className={styles.leftSvg}/>
          </div>

        </div>
        </Fade>

        <br/><br/><br/>  

      </div>

      

        <Fade triggerOnce>
        <div style={{ backgroundColor:"#438dbf", padding:"35px",  color: "white", textShadow: "2px 4px 3px rgba(0,0,0,0.3)" }}>

        <div className="container">

          <h1 style={{ textAlign: "center" }}> References from</h1>
          <div style={{ display:"flex", justifyContent:"center"}}>
            <div style={{ backgroundColor:"rgb(92,210,239)", width:"150px", height:"6px", marginBottom:"5px"}}></div>
          </div>
          <br/>

          <div className="row" style={{ textAlign: "center"}}>

            <div className={clsx('col col--3')} >
              
              <SiJavascript color="rgb(234,212,28)" size={90}/>
              <h2>Javascript</h2>
            
            </div>

            <div className={clsx('col col--3')} >
            
              <SiHtml5 color="rgb(229,96,39)" size={90}/>
              <h2>HTML</h2>
              
            </div>

            <div className={clsx('col col--3')} >
              
              <SiCsswizardry color="rgb(20,115,156)" size={90}/>
              <h2>CSS deisgn</h2>
              
            </div>

            <div className={clsx('col col--3')} >
              
              <SiReact color="rgb(92,210,239)" size={90}/>
              <h2>React</h2>
              
            </div>

          </div>
          
        </div>

        </div>
        </Fade>

        <br/>

        <div style={{ display: "flex", justifyContent: "center", textAlign:"center", padding:"30px"}}>
          <div>

            <h1 style={{ fontSize:"60px" }}>Start now!</h1>
            <div className={styles.buttons}>
              <Link className="button button--secondary button--lg" to="/docs/intro">
                Getting started
              </Link>
            </div>
          </div>
        </div>

        <br/>


        {/* <div style={{ position:'relative' }}>
          <div className={styles.customShape16} >
              <svg data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className={styles.shapeFill}></path>
              </svg>
          </div>
        </div> */}

    </Layout>
  );
}
