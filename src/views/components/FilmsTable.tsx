import React from 'react'
import {Table} from 'antd'
import {ColumnsType} from 'antd/es/table'
import {FilmType} from '@/store/ducks/films/types'
import {useSelector} from 'react-redux'
import {selectFilmsByFilters} from '@/store/ducks/films/selectors'

const columns: ColumnsType<FilmType> = [
  {
    title: 'Title',
    dataIndex: 'title',
    sorter: true,
  },
  {
    title: 'Release Year',
    dataIndex: 'release_year',
  },
  {
    title: 'Format',
    dataIndex: 'format',
  }
]


const FilmsTable: React.FC = () => {
  const films: FilmType[] = useSelector(selectFilmsByFilters)

  return (
    <Table dataSource={films} columns={columns} rowKey="id"/>
  )
}

export default FilmsTable
