import Input from '../../components/Input'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'

import Select from './../../components/Select/index';

import { PageTeacherList } from './styled'

function TeacherList() {
  return (
    <PageTeacherList className="container">
      <PageHeader title="Esses são os proffys disponíveis">
        <form id="search-teachers">
          <Select
            name="subject"
            label="Matéria"
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
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-Feira' },
              { value: '2', label: 'Terça-Feira' },
              { value: '3', label: 'Quarta-Feira' },
              { value: '4', label: 'Quinta-Feira' },
              { value: '5', label: 'Sexta-Feira' },
              { value: '6', label: 'Sábado' }
            ]}
          />
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
