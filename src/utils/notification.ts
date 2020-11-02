import {notification} from 'antd'
import {IconType} from 'antd/es/notification'

export const showNotification = (type: IconType, message: string, description?: string): void => {
  notification[type]({
    message,
    description
  })
}