import { BigHowCard } from "../Components/BigHowCard";
import { BigHowCardReversed } from "../Components/BigHowCardReversed";
import { ReviewCards } from "../Components/Review";

export function HowItWorks() {
    return (
      <div>
        <BigHowCard
        title="Du beställer"
        text="Beställ enkelt den kasse som passar dig och din familj bäst. Du behöver inte oroa dig över inköpslistor eller köer i mataffären. "
        imageSrc="src/Images/order2.jpg"
        imageAlt="Person beställer på sin dator"
         />
        <BigHowCardReversed
        title="Vi plockar ihop de fraschaste ingredienserna"
        text="Vi klimatkompenserar er leverans och levererar inom en för oss rimlig tid. No complaints pls"
        imageSrc="src/Images/bellpeppers.jpg"
        imageAlt="Hand plockar paprika"
        />

        <BigHowCard 
        title="Vi levererar"
        text="Laga den hälsosamma maten som kommer med vår klimatkompenserade leverans"
        imageSrc="src/Images/grocery1.jpg"
        imageAlt="Matkasse med grönsaker"
        />

        <BigHowCardReversed
        title="Du lagar din mat"
        text="Laga din mat med dom basta vegetariska ingredienserna och lev ett langt och lyckligt liv tillsammans med planeten"
        imageSrc="src/Images/fresh_greens2.jpg"
        imageAlt="Grönsaker"
        />
        <ReviewCards></ReviewCards>
      </div>
    )
  }
  