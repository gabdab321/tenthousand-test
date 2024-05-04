import * as SecureStore from "expo-secure-store"

export default class keychainPin {
    static async getPinCredentials() {
        try {
            // return await Keychain.getInternetCredentials("pinStorage")
            return await SecureStore.getItemAsync("pin")
        } catch (e) {
            console.log(e)
            return null
        }
    }

    static async setPinCredentials(pin) {
        const response =  await SecureStore.setItemAsync("pin", pin)

        console.log(response)

        return response
    }

    // static async deletePinCredentials() {
    //     const response =  await Keychain.resetInternetCredentials("pinStorage")
    //
    //     console.log(response)
    //
    //     return response
    // }
}