import { FormEvent, useState } from 'react'
import Input from '../../components/Input'
import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher} from '../../components/TeacherItem'
import { BsSearch } from 'react-icons/bs'

import Select from './../../components/Select/index'

import { PageTeacherList } from './styled'
import api from '../../services/api'



const TeacherList: React.FC<Teacher> = () => {
  const [teachers, setTeachers] = useState([])
  const [subject, setSubject] = useState('')
  const [week_day, setWeekDay] = useState('')
  const [time, setTime] = useState('')

  async function searchTeachers(e: FormEvent) {
    e.preventDefault()

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    })

    setTeachers(response.data)
  }

  return (
    <PageTeacherList className="container">
      <PageHeader title="Esses são os proffys disponíveis">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={e => {
              setSubject(e.target.value)
            }}
            options={[
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Artes', label: 'Artes' }
            ]}
          />
          <Select
            name="week-day"
            label="Dia da Semana"
            value={week_day}
            onChange={e => {
              setWeekDay(e.target.value)
            }}
            options={[
              { value: '1', label: 'Domingo' },
              { value: '2', label: 'Segunda-Feira' },
              { value: '3', label: 'Terça-Feira' },
              { value: '4', label: 'Quarta-Feira' },
              { value: '5', label: 'Quinta-Feira' },
              { value: '6', label: 'Sexta-Feira' },
              { value: '7', label: 'Sábado' }
            ]}
          />
          <Input
            type="time"
            name="time"
            label="Hora"
            value={time}
            onChange={e => {
              setTime(e.target.value)
            }}
          />
          <button type="submit">
            <BsSearch />
          </button>
        </form>
      </PageHeader>
      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />
        })}
      </main>
    </PageTeacherList>
  )
}
export default TeacherList
