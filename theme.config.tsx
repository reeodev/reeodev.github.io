import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: "flex", justifyContent:"center", alignItems:"center"}}>
      <img src="img/reelogo.ico" style={{ display: "inline-block", width: "28px"}}></img>
      <h5 style={{ marginLeft: "8px"}}><b>Reeodev</b></h5>
    </div>
  ),
  project: {
    link: 'https://github.com/reeodev/reeodev.github.io',
  },
  docsRepositoryBase: 'https://github.com/reeodev/reeodev.github.io',
  head: (
    <>
      <title>Reeodev</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Reeodev" />
      <meta property="og:description" content="For your design and development references." />
      <meta property="og:locale" content="en_GB"/>
      <meta property="og:type" content="website"/>
      <meta property="og:image" content="https://reeodev.github.io/img/reelogo.ico"/>
      <meta property="og:image:alt" content="Studio logo"/>

      <link rel="mask-icon" href="img/reelogo.ico" color="#5bbad5"></link>
      <link rel="icon" type="image/x-icon" href="/img/reelogo.ico"></link>

      <meta property="og:url" content="https://reeodev.github.io/"></meta>
    </>
  ),
  footer: {
    text: 'Reeodev',
  },
  editLink: {
    text : null
  },
  feedback: {
    content: null
  },
  sidebar: {
    defaultMenuCollapseLevel: 1
  }
}

export default config
