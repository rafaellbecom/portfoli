import { Header } from 'components/Header/Nav/Header';
import { Display } from 'components/Display/Display';
import { SobreMim } from 'components/SobreMim/SobreMim'
import { Projetos } from 'components/Projetos/Projetos'

export default function App() {
  return (
    <main>
      <Header></Header>
      <Display></Display>
      <SobreMim></SobreMim>
      <Projetos></Projetos>
    </main>
  );
}