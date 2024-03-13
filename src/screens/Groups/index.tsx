import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCards } from "@components/GroupCards";

import { Container } from "./styles";

export function Groups() {
  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subtitle="Jogue com sua turma" />

      <GroupCards title="Galera do Ignite"/>
    </Container>
  );
}
