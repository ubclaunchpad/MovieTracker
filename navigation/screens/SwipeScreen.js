import * as React from 'react';
import { View, Text} from 'react-native';

const SwipeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "Swipe" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Swipe Screen</Text>
        </View>
    );
}

export default SwipeScreen;