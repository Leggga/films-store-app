import React, {useCallback, useState} from 'react'
import {useDispatch} from 'react-redux'
import styled from 'styled-components'
import {Button, Col, Row} from 'antd'

import Search from 'antd/es/input/Search'
import {setStarFilter, setTitleFilter} from '@/store/ducks/films/actions'
import {PlusOutlined} from '@ant-design/icons/lib'
import AddFilmModal from '@/views/components/AddFilmModal'

const StyledPanel = styled(Row).attrs({justify: 'space-between'})`
  padding: 16px;
  background-color: #fff;
  margin-bottom: 25px;
`

const SearchPanel: React.FC = () => {
  const dispatch = useDispatch()
  const [isModelVisible, setIsModelVisible] = useState(false);

  const handleTitleSearch = useCallback((value: string) => dispatch(setTitleFilter(value)), [dispatch])
  const handleStarSearch = useCallback((value: string) => dispatch(setStarFilter(value)), [dispatch])
  const handleAddFilm = useCallback(() => setIsModelVisible(true), [])

  return (
    <>
      <StyledPanel>
        <Col span={8}>
          <Search
            placeholder="Search by title"
            allowClear
            enterButton="Search"
            size="middle"
            onSearch={handleTitleSearch}
          />
        </Col>

        <Col span={8}>
          <Search
            placeholder="Search by actors"
            allowClear
            enterButton="Search"
            size="middle"
            onSearch={handleStarSearch}
          />
        </Col>

        <Col offset={4}>
          <Button type="dashed" icon={<PlusOutlined/>} onClick={handleAddFilm}>Add film</Button>
        </Col>
      </StyledPanel>
      <AddFilmModal isVisible={isModelVisible} onChangeVisible={setIsModelVisible}/>
    </>
  )
}

export default SearchPanel