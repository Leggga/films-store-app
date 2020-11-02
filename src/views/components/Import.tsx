import React, {useCallback} from 'react'
import {useDispatch} from 'react-redux'
import {AxiosError} from 'axios'
//components
import {Button, Upload} from 'antd'
import {UploadOutlined} from '@ant-design/icons'
//types
import {RcCustomRequestOptions, UploadChangeParam} from 'antd/es/upload/interface'
//API
import {importFilmsAPI, MessageResponse} from '@/api/filmsAPI'
//actions
import {getFilmsRequest} from '@/store/ducks/films/actions'
//utils
import {showNotification} from '@/utils/notification'


const Import: React.FC = () => {
  const dispatch = useDispatch()

  const handleUpload = useCallback(async ({onSuccess, onError, file}: RcCustomRequestOptions) => {
    const formData = new FormData()
    formData.append('file', file)
    await importFilmsAPI(formData).then(resp => onSuccess(resp, file)).catch((e: AxiosError) => onError(e, e.response?.data))
  }, [])

  const handleChange = useCallback((info: UploadChangeParam) => {
    const {status, response, name} = info.file
    const resp: MessageResponse = response

    if (status === 'done') {
      showNotification('success', resp.message)
      dispatch(getFilmsRequest())
    } else if (status === 'error') {
      showNotification('error', resp?.message ? resp.message : `${name} file upload failed.`)
    }
  }, [dispatch])

  return (
    <Upload
      accept="text/plain"
      showUploadList={false}
      onChange={handleChange}
      customRequest={handleUpload}
    >
      <Button icon={<UploadOutlined/>}>Import</Button>
    </Upload>
  )
}

export default Import
