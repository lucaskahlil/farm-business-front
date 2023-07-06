import { CategoryProps } from "../utils/types/request.ts"

import '../style/components/card-category.sass'

export default function CardCategory(category: CategoryProps) {
  return (
    <div id="card-category">
        <img src={category.img} alt="imagem da categoria" />
        <p>{category.name}</p>
    </div>
  )
}
