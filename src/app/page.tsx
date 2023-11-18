import HomeComponent from './components/homeComponent'

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return (
    <HomeComponent/>
  )
}
