import { QuestionDto } from '@/model/question.dto'
import React from 'react'
import { Card, Radio, RadioChangeEvent, message } from 'antd'

interface Props extends QuestionDto {
  index: number
}

const CardQuestion: React.FC<Props> = (props) => {
  const { question, answer, listAnswer, index } = props

  const onChange = (e: RadioChangeEvent) => {
    const selectValue = e?.target?.value || ''

    if (selectValue === answer) {
      return message.success('Correct answer', 2)
    }

    message.error('Wrong answer', 2)
  }

  return (
    <Card
      title={`${index}. ${question}`}
      style={{ marginBottom: '24px' }}
    >
      <Radio.Group onChange={onChange}>
        {listAnswer?.map(item => (
          <Radio value={item} key={item}>{item}</Radio>
        ))}
      </Radio.Group>
    </Card>
  )
}

export default CardQuestion