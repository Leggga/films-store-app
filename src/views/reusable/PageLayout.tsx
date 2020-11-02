import React, {memo} from 'react'
import {Layout, Row} from 'antd'
//components
import Header from '@/views/reusable/Header'

type Props = {
  children: React.ReactNode
}

const PageLayout: React.FC<Props> = ({children}) =>
  <Layout style={{minHeight: '100vh'}}>
    <Header/>
    <Layout.Content style={{padding: '50px'}}>
      {children}
    </Layout.Content>
    <Layout.Footer>
      <Row justify="center">@2020 React Test App</Row>
    </Layout.Footer>
  </Layout>

export default memo(PageLayout)
