import Prev from "../components/Prev";
import RecipeCard from "../components/RecipeCard";

function Recipes() {
    const recipes = [
        {
            title: "Chicken Pan Pizza",
            image: "/img/gallery/img_1.jpg",
            desc: "Juicy chicken, melted cheese, and rich tomato sauce atop a crispy, golden pan-baked pizza crust."
        },
        {
            title: "Spaghetti and Meatballs",
            image: "/img/gallery/img_4.jpg",
            desc: "Tender meatballs and flavorful marinara sauce served over perfectly cooked spaghetti, a classic Italian favorite."
        },
        {
            title: "American Cheese Burger",
            image: "/img/gallery/img_5.jpg",
            desc: "Juicy chicken patty, melted American cheese, fresh lettuce, tomato, and pickles in a toasted bun."
        },
        {
            title: "Mutton Biriyani",
            image: "/img/gallery/img_6.jpg",
            desc: "Tender mutton, fragrant basmati rice, aromatic spices, and herbs, all layered and slow-cooked to perfection."
        },
        {
            title: "Pad Thai",
            image: "/img/gallery/img_11.jpg",
            desc: "Stir-fried rice noodles with tofu, shrimp, or chicken, seasoned with tamarind sauce, and garnished with peanuts."
        },
        {
            title: "Mexican Tacos",
            image: "/img/gallery/img_12.jpg",
            desc: "Folded tortillas filled with various ingredients like meat, beans, salsa, and avocado."
        },
        {
            title: "Kimchi",
            image: "/img/gallery/img_13.jpg",
            desc: "Fermented vegetables, typically cabbage or radishes, seasoned with chili peppers and other spices."
        },
        {
            title: "Croissant",
            image: "/img/gallery/img_14.jpg",
            desc: " Buttery, flaky pastry enjoyed for breakfast or as a snack."
        },
        {
            title: "Ramen",
            image: "/img/gallery/img_15.jpg",
            desc: "Noodles served in a savory broth, often topped with sliced pork, egg, and green onions."
        },
        {
            title: "Poutine",
            image: "/img/gallery/img_16.jpg",
            desc: "French fries topped with cheese curds and smothered in gravy."
        },
        {
            title: "Paella",
            image: "/img/gallery/img_17.jpg",
            desc: "Saffron-infused rice cooked with seafood, chicken, and vegetables in a large, shallow pan."
        },
        {
            title: "Pav Bhaji",
            image: "/img/gallery/img_18.jpg",
            desc: "Spicy vegetable mash served with buttered bread rolls, a popular Indian street food dish."
        }
    ]
    return <div>
        <Prev />
        <div className="recipes-container">
            {/* <RecipeCard /> */}
            {recipes.map((recipe, index) => (
                <RecipeCard recipe={recipe} key={index} />
            ))}
        </div>
    </div>
}

export default Recipes;