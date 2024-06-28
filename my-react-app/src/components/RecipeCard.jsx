import CustomImage from "./Customimage"

function RecipeCard({recipe}){
    return (
        <div className="recipe-card">
            <CustomImage imgsrc={recipe.image} pt="85%"/>
            <div className="recipe-card-info">
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">{recipe.desc}</p>
                <a className="view-btn" href="#!">VIEW RECIPE</a>
            </div>
        </div>
    )
}
export default RecipeCard;