import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import UserList from './views/UserList'
import UserForm from './views/UserForm'
import { Button, Icon } from 'react-native-elements'
import { UsersProvider } from './context/UsersContext'

const Stack = createStackNavigator()

export default props => {
    return (
        <UsersProvider>
                
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="UserList"
                screenOptions={screenOptions}>
                <Stack.Screen
                    name="UserList"
                    component={UserList}
                    options={({ navigation }) => {
                        return {
                            title: "Mural Achados e Perdidos",
                            headerRight: () => (
                                <Button
                                    onPress={() => navigation.navigate("UserForm")} 
                                    type="clear"
                                    icon={<Icon name="add" size={29} color="green"/>}
                                />
                            )
                        }
                    }}
                />
                  <Stack.Screen
                    name="UserForm"
                    component={UserForm}
                    options={{
                        title: "Formulario Achados e Perdidos"
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer> 
        </UsersProvider>
        
    )
}

const screenOptions = {
    headerStyle: {
        backgroundColor: '#00ced1'
    },
    headerTintColor: '#000000',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
}