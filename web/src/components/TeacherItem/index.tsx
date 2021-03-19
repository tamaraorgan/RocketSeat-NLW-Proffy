import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import api from '../../services/api'

import { TeacherItemMain } from './styled'

export interface Teacher {
  id: number
  user_id: number
  cost: number
  name: string
  avatar: string
  bio: string
  subject: string
  whatsapp: string
}
interface TeacherItemProps {
  teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function createNewConnection() {
    api.post('connections', {
      user_id: teacher.id
    })
  }

  return (
    <TeacherItemMain>
      <article className="teacher-item">
        <header>
          <img src={teacher.avatar} alt={teacher.name} />
          <div>
            <strong>{teacher.name}</strong>
            <span>{teacher.subject}</span>
          </div>
        </header>
        <p className="description">{teacher.bio}</p>
        <footer>
          <p>
            Preço/Hora
            <strong>R$ {teacher.cost}</strong>
          </p>
          <a
            href={`https://wa.me/${teacher.whatsapp}`}
            onClick={createNewConnection}
            target="_black"
          >
            <img src={whatsappIcon} alt="whatsapp" />
            Entrar em contato
          </a>
        </footer>
      </article>
    </TeacherItemMain>
  )
}
export default TeacherItem
