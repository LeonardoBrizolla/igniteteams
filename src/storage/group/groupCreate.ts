import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";

import { groupGetAll } from "./groupGetAll";
import { GROUP_COLLECTION } from "@storage/storageConfig";

export async function groupCreate(newGroup: string) {
  try {
    const storedGroup = await groupGetAll();

    const groupAlreadyExists = storedGroup.includes(newGroup);

    if (groupAlreadyExists) {
      throw new AppError('Já existe um grupo cadastrado com esse nome.');
    }

    const storage = JSON.stringify([...storedGroup, newGroup]);

    await AsyncStorage.setItem(GROUP_COLLECTION, storage); 
  } catch (error) {
    throw error;
  }
}
