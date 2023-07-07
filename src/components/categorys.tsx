import { CategoryProps } from "../utils/types/request"
import CardCategory from "./card-category"

export default function Categorys() {
  
  const AllCategorys: CategoryProps[] = [
    {id: "", img: "", title: ""},
    {id: "", img: "", title: ""},
    {id: "", img: "", title: ""},
  ]

  return (
    <section>
      <h2>Categorias no Agro</h2>
      <div>
        {AllCategorys.map((category) => (
          < CardCategory key={category.id} categoria={category}/>
        ))}
      </div>
    </section>
  )
}
