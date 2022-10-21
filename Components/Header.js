import { StyleSheet, Text, View, Image } from 'react-native';

export default function Header() {
    return(
        <View style={styles.header}>
            <Image 
                source={require('../assets/Icons/menu_light.png')} 
                style={styles.icon} 
            />
            <Text style={styles.logo}>
                Pivot
            </Text>
            <Image 
                source={require('../assets/Icons/sun.png')} 
                style={styles.icon} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginTop: 15,
    },
    icon: {
        height: 41,
        width: 41,
    },
    logo: {
        fontFamily: 'Sydney',
        fontSize: 45,
    },
});

