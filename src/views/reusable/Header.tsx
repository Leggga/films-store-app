import React from 'react'
import {Layout, Row, Typography} from 'antd'
import styled from 'styled-components'
import Import from '@/views/components/Import'

const StyledHeader = styled(Layout.Header)`
  background: #fff;
  box-shadow: 0 0 10px 0 rgba(51,51,51,.33);
`
const StyledTitle = styled(Typography.Title).attrs({level: 2})`
  margin-bottom: 0 !important;
`

const Header: React.FC = () => {

  return (
    <StyledHeader>
      <Row justify="space-between" align="middle">
        <StyledTitle>Films store</StyledTitle>
        <Import/>
      </Row>
    </StyledHeader>
  )
}

export default Header