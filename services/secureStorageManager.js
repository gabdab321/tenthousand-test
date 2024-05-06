import * as SecureStore from "expo-secure-store"

export default class secureStorageManager {
    static async getPinCredentials() {
        try {
            return await SecureStore.getItemAsync("pin")
        } catch (e) {
            return null
        }
    }

    static async setPinCredentials(pin) {
        return await SecureStore.setItemAsync("pin", pin)
    }

    static async deletePinCredentials() {
        return await SecureStore.deleteItemAsync("pin")
    }
}