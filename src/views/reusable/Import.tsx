import React from 'react'
import {Button, Upload} from 'antd'
import { UploadOutlined } from '@ant-design/icons';

const Import: React.FC = () => {

  return (
    <Upload>
      <Button icon={<UploadOutlined/>}>Import</Button>
    </Upload>
  )
}

export default Import
