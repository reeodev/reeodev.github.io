import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
// import logo from "./public/img/reelogo.ico"

// app.useStatic("upload")

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
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://github.com/reeodev/reeodev.github.io',
  footer: {
    text: 'Reeodev',
  },
}

export default config
