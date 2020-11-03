import React, {useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'
//components
import {Table, Tag} from 'antd'
import Button from 'antd/es/button'
import Column from 'antd/es/table/Column'
//types
import {
  SorterResult,
  TableCurrentDataSource,
} from 'antd/lib/table/interface'
import {Film, FilmsFormat} from '@/store/ducks/films/types'
//redux
import {
  selectFilmsByConditions,
  selectIsLoading,
} from '@/store/ducks/films/selectors'
import {removeFilmRequest, setSortOrder} from '@/store/ducks/films/actions'
//utils
import {getFormatFilmColor} from '@/utils'

const FilmsTable: React.FC = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(selectIsLoading)
  const films: Film[] = useSelector(selectFilmsByConditions)

  //handlers
  const handleSortByTitle = useCallback(
    (
      _,
      __,
      sorter: SorterResult<Film> | SorterResult<Film>[],
      extra: TableCurrentDataSource<Film>
    ) => {
      if (extra.action === 'sort' && !(sorter instanceof Array)) {
        dispatch(setSortOrder(sorter.order))
      }
    },
    [dispatch]
  )

  const handleRemove = useCallback(
    (record: Film) => dispatch(removeFilmRequest(record.id)),
    [dispatch]
  )

  //columns render
  const renderFormatTag = useCallback(
    (format: FilmsFormat) => (
      <Tag color={getFormatFilmColor(format)} key={format}>
        {format}
      </Tag>
    ),
    []
  )
  const renderStars = useCallback(
    (stars: string[]) => <>{stars.join(', ')}</>,
    []
  )
  const renderAction = useCallback(
    (_, record) => (
      <Button onClick={() => handleRemove(record)}>Remove</Button>
    ),
    [handleRemove]
  )

  return (
    <Table
      rowKey='id'
      dataSource={films}
      tableLayout='fixed'
      loading={isLoading}
      onChange={handleSortByTitle}
    >
      <Column title='Title' dataIndex='title' sorter={true} />
      <Column title='Release Year' dataIndex='release_year' />
      <Column title='Format' dataIndex='format' render={renderFormatTag} />
      <Column title='Stars' dataIndex='stars' render={renderStars} />
      <Column
        title='Action'
        dataIndex='Action'
        align='center'
        render={renderAction}
      />
    </Table>
  )
}

export default FilmsTable
