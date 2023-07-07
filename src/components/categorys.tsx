import { CategoryProps } from "../utils/types/request"
import CardCategory from "./card-category"
import '../style/components/categorys.sass'

export default function Categorys() {
  
  const AllCategorys: CategoryProps[] = [
    {id: "img1", img: "https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia26195/chacara-sitio-ou-fazenda-cursos-cpt.jpg", title: "Categoria"},
    {id: "img2", img: "https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia26195/chacara-sitio-ou-fazenda-cursos-cpt.jpg", title: "Categoria"},
    {id: "img3", img: "https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia26195/chacara-sitio-ou-fazenda-cursos-cpt.jpg", title: "Categoria"},
    {id: "img4", img: "https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia26195/chacara-sitio-ou-fazenda-cursos-cpt.jpg", title: "Categoria"},
    {id: "img5", img: "https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia26195/chacara-sitio-ou-fazenda-cursos-cpt.jpg", title: "Categoria"},
    {id: "img6", img: "https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia26195/chacara-sitio-ou-fazenda-cursos-cpt.jpg", title: "Categoria"},
    {id: "img7", img: "https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia26195/chacara-sitio-ou-fazenda-cursos-cpt.jpg", title: "Categoria"},
    {id: "img8", img: "https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia26195/chacara-sitio-ou-fazenda-cursos-cpt.jpg", title: "Categoria"}
  ]

  return (
    <section id="category">
      <h2>Categorias no Agro</h2>
      <div className="categorys-container">
        {AllCategorys.map((category) => (
          < CardCategory key={category.id} categoria={category}/>
        ))}
      </div>
    </section>
  )
}
