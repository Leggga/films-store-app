import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
//components
import PageLayout from '@/views/reusable/PageLayout'
import FilmsTable from '@/views/components/FilmsTable'
import SearchPanel from '@/views/components/SearchPanel'
//redux
import {getFilmsRequest} from '@/store/ducks/films/actions'


const MainPage: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFilmsRequest())
  }, [dispatch])

  return (
    <PageLayout>
      <>
        <SearchPanel/>
        <FilmsTable/>
      </>
    </PageLayout>
  )
}

export default MainPage