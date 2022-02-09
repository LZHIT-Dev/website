import React from "react"

import "normalize.css"
import "react-awesome-slider/dist/styles.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../components/index.module.css"
import QRCode from "react-qr-code"


const Pgyer = "https://www.pgyer.com/inlushan"
const localDown = "https://api-serv.tzih.top/inlushan/app-release_20_RELEASE_jiagu_sign.apk"


const IndexPage = () => (
  <Layout>
    <SEO title="在鹿山App - 柳州工学院师生必备校园生活App"/>

    <br/>

    <div>
      <h1 style={{ letterSpacing: 1, marginBottom: "1rem"}}>在鹿山App</h1>
      <p className={styles.slogan}>
      在鹿山App是柳州工学院师生的绝佳之选。此应用能够帮助你快捷认证校园网、提供教务系统和学工系统的快捷入口，还能很方便地查询图书馆馆藏。南北校区均可下载使用。
      </p>
    </div>

    <div className={styles.download}>
      <div>
        <a style={{ height: 40, display: "inline-block", marginBottom: 10 }} href={Pgyer} target="_blank">
          <img height={40} src={require("../images/pgyerDownload.png")} alt=""/>
        </a>
        <a style={{ height: 40, display: "inline-block", marginBottom: 10, marginLeft: 10}} href={localDown} target="_blank">
          <img height={40} src={require("../images/localDownload.png")} alt=""/>
        </a>
        <br/>

        <small className={styles.downloadTip}> 即刻下载 </small>
      </div>
      &nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;
      <div style={{width: 80, height: 80}}>
        <QRCode value={Pgyer} size={80} style={{ justifySelf: "flex-end" }}/>
      </div>
    </div>

    {/*<hr className={styles.hr}/>*/}
    <h2 className={styles.h2}>应用截图</h2>
    <div className={styles.previews}>
      <img
        width={285} height={684}
        src={require("../images/intro1.png")}/>
      <img
        width={285} height={684}
        src={require("../images/intro2.png")}/>
      <img
        width={285} height={684}
        src={require("../images/intro3.png")}/>
      <img
        width={285} height={684}
        src={require("../images/intro4.png")}/>
    </div>
  </Layout>
)

export default IndexPage
