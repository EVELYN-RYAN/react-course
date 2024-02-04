type FoodListProps = {
    foods: string[]
}
export const FoodList = (props: FoodListProps) => {
    return(
        <div>
            {props.foods.map(food => {
                return(
                    <span key={food}>{food} </span>
                )
            })}
        </div>
    )
}