import { CategoryProps } from "../utils/types/request.ts"

export default function CardCategory(category: CategoryProps) {
  return (
    <div>
        <img src={category.img} alt="imagem da categoria" />
        <p>{category.name}</p>
    </div>
  )
}
