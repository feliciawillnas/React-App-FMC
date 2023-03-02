import styled from "styled-components";
import { Carousel } from "../Components/Carousel";
import { RecipeCard, RecipeCardProps } from "../Components/DetailedRecipeCard";
import { ReviewCards } from "../Components/Review";
import { StyledRecipeCardsContainer } from "./Home";

const recipe1: RecipeCardProps = {
  title: "BLOMKÅLSPURÉ",
  tag: "Under 15 min",
  image: "src/Images/recipe9.jpg",
  description: "Krämig blomkålspuré serverad med mandarin och körsbärstomat",
  time: "15 MIN",
  tagBackgroundColor: "#ff8a48"
};

const recipe2: RecipeCardProps = {
  title: "KRÄMIG MOROTSSOPPA",
  tag: "Familjevänlig",
  image: "src/Images/recipe6.jpg",
  description: "Rustik och färgglad morotssoppa, en perfekt värmande soppa när det är lite kyligare ute",
  time: "30 MIN",
  tagBackgroundColor: "#68a75f"
};

const recipe3: RecipeCardProps = {
  title: "KLASSISKA UNGSBAKADE ROTFRUKTER",
  tag: "För dig som tränar",
  image: "src/Images/recipe7.jpg",
  description: "Potatisen, palsternackan och morötterna smakar ljuvligt gott av smakhöjare som salt, citron och färsk rosmarin",
  time: "25 MIN",
  tagBackgroundColor: "#ffe282"
};

const recipe4: RecipeCardProps = {
  title: "GRÖN ÄRTPURÉ MED GRANATÄPPLE",
  tag: "För dig som tränar",
  image: "src/Images/recipe8.jpg",
  description: "Knalligt grön ärtpuré med granatäpple. God som både birätt eller som pålägg",
  time: "60 MIN",
  tagBackgroundColor: "#ffe282"
};

const recipe5: RecipeCardProps = {
  title: "GRÖN ÄRTPURÉ MED GRANATÄPPLE",
  tag: "Under 15 min",
  image: "src/Images/recipe8.jpg",
  description: "Knalligt grön ärtpuré med granatäpple. God som både birätt eller som pålägg",
  time: "15 MIN",
  tagBackgroundColor: "#ff8a48"
};

const recipe6: RecipeCardProps = {
  title: "GRÖN ÄRTPURÉ MED GRANATÄPPLE",
  tag: "Familjevänlig",
  image: "src/Images/recipe8.jpg",
  description: "Knalligt grön ärtpuré med granatäpple. God som både birätt eller som pålägg",
  time: "50 MIN",
  tagBackgroundColor: "#68a75f"
};

export function Recipies() {
    return (
      <div>
        <Carousel
        height={35}
        images={[
          "src/Images/fruits_food.jpg",
          "src/Images/fruits_food_2.jpg",
          "src/Images/dessert_1.jpg",
        ]}
        titles={[
          "Massor av goda och inspirerande fruktrecept!",
          "Enkla, goda och miljövänliga fruktmåltider! ",
          "Problem att få i dig dina 15 frukter om dagen? Prova våra desserter!",
        ]}
        buttonText={[
          "Våra fruktkassar",
          "Jag älskar blåbär!",
        ]}
        gradientColor={
          "tbc"
        }
      />
      <RecipeCardContainerBackground>
        <Test>
          <StyledRecipeCardsContainer>
            <RecipeCard {...recipe1} />
            <RecipeCard {...recipe2} />
            <RecipeCard {...recipe3} />
            <RecipeCard {...recipe4} />
            <RecipeCard {...recipe5} />
            <RecipeCard {...recipe6} />
          </StyledRecipeCardsContainer>
        </Test> 
      </RecipeCardContainerBackground>

      <ReviewCards></ReviewCards>
      </div>
    )
  }

const RecipeCardContainerBackground = styled.div`
  background-color: #fff8ea;
`
const Test = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  `

const StyledRecipeCardsWrapper = styled.div`
display: flex;
flex-direction: column;

@media(max-width:850px){
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-left: 0;
margin-right: 0;
}

@media (min-width: 851px) and (max-width: 1000px) {
  display: flex;
  justify-content: space-between;
  margin-left: 100px;
  margin-right: 100px;
}
`;