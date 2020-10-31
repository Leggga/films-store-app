import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Layout, Spin} from 'antd'
//components
import Header from '@/views/reusable/Header'
import FilmsTable from '@/views/components/FilmsTable'

import {getFilmsRequest, setTitleFilter} from '@/store/ducks/films/actions'
import {selectIsLoading} from '@/store/ducks/films/selectors'
import Search from 'antd/es/input/Search'

const {Footer, Content} = Layout

const MainPage: React.FC = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(selectIsLoading)

  useEffect(() => {
    dispatch(getFilmsRequest())
  }, [dispatch])

  return (
    <Layout style={{minHeight: '100vh'}}>
      <Header/>
      <Content style={{padding: '50px'}}>

        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={(value => dispatch(setTitleFilter(value)))}
        />

        {
          isLoading
            ? <Spin/>
            : <FilmsTable/>
        }
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  )
}

export default MainPage