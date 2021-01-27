import React from 'react'
import Input from '../../components/Input'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'

import { PageTeacherList } from './styled'

function TeacherList() {
  return (
    <PageTeacherList className="container">
      <PageHeader title="Esses são os proffys disponíveis">
        <form id="search-teachers">
          <Input name="subject" label="Matéria" />
          <Input name="week-day" label="Dia da Semana" />
          <Input type="time" name="time" label="Hora" />
        </form>
      </PageHeader>
      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </PageTeacherList>
  )
}
export default TeacherList
