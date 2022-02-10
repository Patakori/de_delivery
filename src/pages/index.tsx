
import { Category } from "../Components/Category";
import { Header } from "../Components/Header";
import { News } from "../Components/News";
import { Popular } from "../Components/Popular";
import { Slider } from "../Components/Slider";
import { Container } from "./styles";
import { Beats } from "../Components/Beats"

export default function Home() {
  return (
    <Container>
      <Header/>
      <Slider/>
      <Category/>
      <Popular/>
      <News/>
      <Beats/>
    </Container>
  )
}