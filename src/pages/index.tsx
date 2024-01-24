import React, { useState, useEffect } from 'react'
import Container from "@/component/Container";
import CardQuestion from "@/component/CardQuestion";
import { question } from '../store/question'
import FlatList from '@/component/FlatList';
import { QuestionDto } from '@/model/question.dto';

export default function Home() {
  const [listQuestion, setListQuestion] = useState<QuestionDto[]>()

  const getRandomQuestion = (arr: QuestionDto[], count: number): QuestionDto[] => {
    const result = []
    const tempArray = arr.slice()

    for (var i = 0; i < count; i++) {
      if (tempArray.length === 0) {
        break;
      }

      const randomIndex = Math.floor(Math.random() * tempArray.length)
      result.push(tempArray[randomIndex])
      tempArray.splice(randomIndex, 1)
    }

    return result
  }

  useEffect(() => {
    const initialListQuestion = () => {
      setListQuestion(getRandomQuestion(question, 20))
    }

    initialListQuestion()
  }, [])

  return (
    <Container>
      <FlatList
        data={listQuestion || []}
        renderItem={(item, index) => <CardQuestion {...item} index={index} />}
      />
    </Container>
  );
}
