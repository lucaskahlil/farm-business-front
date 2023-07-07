import { CategoryProps } from "../utils/types/request.ts"
import '../style/components/card-category.sass'

interface CardCategoryProps {
  categoria: CategoryProps
}

export default function CardCategory(categoria: CardCategoryProps) {
  return (
    <div id="card-category">
        <img src={categoria.categoria.img} alt="imagem da categoria" />
        <p>{categoria.categoria.title}</p>
    </div>
  )
}
