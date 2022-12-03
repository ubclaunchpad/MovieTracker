import * as React from 'react';
import { View, Text} from 'react-native';

const AccountScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "Account" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Account Screen</Text>
        </View>
    );
}

export default AccountScreen;