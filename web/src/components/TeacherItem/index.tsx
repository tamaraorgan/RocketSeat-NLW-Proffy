import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import { TeacherItemMain } from './styled'

const TeacherItem: React.FC = () => {
  return (
    <TeacherItemMain>
      <article className="teacher-item">
        <header>
          <img
            src="https://avatars2.githubusercontent.com/u/68870322?s=460&u=bfae2e6616c1f203e64e6f0e49631cef64589990&v=4"
            alt="Tamara Organ"
          />
          <div>
            <strong>Tamara Organ</strong>
            <span>Matemática</span>
          </div>
        </header>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          <br />
          Labore, blanditiis eius molestiae quos a fuga sapiente quasi. Repellat
          ut similique ipsam nemo quae suscipit expedita, veritatis laboriosam
          eligendi. Unde, laborum?
        </p>
        <footer>
          <p>
            Preço/Hora
            <strong>R$ 120,00</strong>
          </p>
          <button type="button">
            <img src={whatsappIcon} alt="whatsapp" />
            Entrar em contato
          </button>
        </footer>
      </article>
    </TeacherItemMain>
  )
}
export default TeacherItem
