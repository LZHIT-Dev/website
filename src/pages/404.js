import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>页面未找到</h1>
    <p>我们并未在服务器上正确找到地址所指文件，您可能输入了错误的地址。</p>
  </Layout>
)

export default NotFoundPage
