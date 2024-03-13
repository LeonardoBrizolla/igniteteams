import { useState } from "react";
import { FlatList } from "react-native";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCards } from "@components/GroupCards";

import { Container } from "./styles";

export function Groups() {
  const [groups, setGroups] = useState<string[]>(["Galera da Rocket"]);

  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subtitle="Jogue com sua turma" />

      <FlatList 
        data={groups} 
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCards title={item} />}
      />
    </Container>
  );
}
