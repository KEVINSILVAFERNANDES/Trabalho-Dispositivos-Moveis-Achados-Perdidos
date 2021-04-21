import React, { useContext, useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Button } from 'react-native-elements'
import UsersContext from '../context/UsersContext'

export default ({route, navigation}) => {
    const [user, setUser] = useState(route.params ? route.params : {})
    const { dispatch } = useContext(UsersContext)
    return (
        <View style={style.form}>
            <Text>N° Apartamento:</Text>
            <TextInput
                style={style.input} 
                onChangeText={apartamento => setUser({...user, apartamento })}
                placeholder="Informe o numero do Apartamento"
                value={user.apartamento}
                
            />
            <Text>Descrição do Objeto:</Text>
            <TextInput
                style={style2.input2} 
                onChangeText={descrição => setUser({...user, descrição })}
                placeholder="Descreva o Objeto encontrado"
                value={user.descrição}
                
            />
            <Text>Telefone:</Text>
            <TextInput
                style={style.input} 
                onChangeText={telefone => setUser({...user, telefone })}
                placeholder="Informe o Telefone para Contato"
                value={user.telefone}
                
            />
            <Button
                title="Salvar"
                onPress={() => {
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user,
                    })
                    navigation.goBack()
                }}
            />
        </View>
    )
    
}

const style = StyleSheet.create({
    form: {
        padding: 12
    },
    input: {
        height: 40,
        borderColor: 'grey',
        borderWidth: 1,
        marginBottom: 10,
    }
})

const style2 = StyleSheet.create({
    form: {
        padding: 12
    },
    input2: {
        height: 100,
        borderColor: 'grey',
        borderWidth: 1,
        marginBottom: 10,
    }
})
