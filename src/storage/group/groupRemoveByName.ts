import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/storageConfig";

import { groupGetAll } from "./groupGetAll";

export async function groupRemoveByName(groupDeleted: string) {
  try {
    const storedGroups = await groupGetAll();

    const groupsFiltered = storedGroups.filter(
      (group) => group !== groupDeleted
    );
    const newGroups = JSON.stringify(groupsFiltered);

    await AsyncStorage.setItem(GROUP_COLLECTION, newGroups);
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupDeleted}`);
  } catch (error) {
    throw error;
  }
}
