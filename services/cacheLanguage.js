import AsyncStorage from "@react-native-async-storage/async-storage";

export async function saveLanguage(language) {
    try {
        await AsyncStorage.setItem('language', language)
    } catch (error) {
        return error
    }
}

export async function loadLanguage() {
    try {
        const language = await AsyncStorage.getItem('language')
        return language || 'en'
    } catch (error) {
        return 'en'
    }
}