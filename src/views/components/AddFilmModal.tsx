import React, {useCallback} from 'react'
import {useDispatch} from 'react-redux'
import moment, {Moment} from 'moment'
//antd
import {Button, DatePicker, Form, Input, Modal, Select, Space} from 'antd'
import {MinusCircleOutlined, PlusOutlined} from '@ant-design/icons/lib'
//redux
import {FilmTemp} from '@/store/ducks/films/types'
import {addFilmRequest} from '@/store/ducks/films/actions'

type Props = {
  isVisible: boolean
  onChangeVisible: (isVisible: boolean) => void
}

interface FormValues extends Omit<FilmTemp, 'release_year'> {
  release_year: Moment
}

const formItemLayout = {
  wrapperCol: {xs: {span: 24}}
}
const formItemLayoutWithOutLabel = {
  wrapperCol: {xs: {span: 18, offset: 6}}
}

const AddFilmModal: React.FC<Props> = ({isVisible, onChangeVisible}) => {
  const [form] = Form.useForm<FormValues>()
  const dispatch = useDispatch()

  const handleSubmit = useCallback(() => {
    const values = form.getFieldsValue()
    const film: FilmTemp = {...values, release_year: values.release_year.get('year')}
    dispatch(addFilmRequest(film))

    form.resetFields()
    onChangeVisible(false)
  }, [dispatch, onChangeVisible, form])

  const handleCancel = useCallback(() => {
    onChangeVisible(false)
    form.resetFields()
  }, [onChangeVisible, form])

  const disabledDate = useCallback((date: Moment): boolean =>
    date.isAfter(moment().endOf('year')) || date.isBefore(new Date(1900, 0))
    , [])

  return (
    <Modal
      title="Add film"
      visible={isVisible}
      onOk={form.submit}
      onCancel={handleCancel}
    >
      <Form
        id="filmForm"
        form={form}
        name="basic"
        requiredMark={false}
        initialValues={{stars: []}}
        onFinish={handleSubmit}
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[{required: true, message: 'Please input title!', whitespace: true}]}
        >
          <Input/>
        </Form.Item>

        <Form.Item
          label="Release Year"
          name="release_year"
          rules={[{required: true, message: 'Please choose year!'}]}
        >
          <DatePicker picker="year" disabledDate={disabledDate} onChange={() => console.log('change')}/>
        </Form.Item>

        <Form.Item
          label="Format"
          name="format"
          rules={[{required: true, message: 'Please choose format!'}]}
        >
          <Select placeholder="Please select a format">
            <Select.Option value="Blu-Ray">Blu-Ray</Select.Option>
            <Select.Option value="DVD">DVD</Select.Option>
            <Select.Option value="VHS">VHS</Select.Option>
          </Select>
        </Form.Item>

        <Form.List
          name="stars"
          rules={[
            {
              validator: async (_, stars) => {
                if (!stars || !stars.length) {
                  return Promise.reject(new Error('At least 1 star'))
                }
              },
            },
          ]}
        >
          {(fields, {add, remove}, {errors}) => (
            <>
              {fields.map((field, index) => (
                <Space key={field.key} style={{display: 'flex', marginBottom: 8, flex: 1}} align="baseline">
                  <Form.Item
                    {...field}
                    {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                    rules={[{required: true, message: 'Missing full name', whitespace: true}]}
                    validateTrigger={['onChange', 'onBlur']}
                    label={index === 0 ? 'Stars' : ''}
                    key={field.key}
                  >
                    <Input placeholder="Full name"/>
                  </Form.Item>

                  <MinusCircleOutlined onClick={() => remove(field.name)}/>
                </Space>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined/>}>
                  Add star
                </Button>
                <Form.ErrorList errors={errors}/>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form>
    </Modal>
  )
}

export default AddFilmModal
