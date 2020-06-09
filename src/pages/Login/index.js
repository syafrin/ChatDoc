import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Logo } from '../../assets'
import { Input, Link, Gap, Button } from '../../components'

const Login = () => {
    return (
        <View style={ styles.page }>
            <Logo />
            <Text style={styles.title}>Masuk Dan Mulai Berkontribusi</Text>
            <Input label="Email Address" />
            <Gap height={24} />
            <Input label="Password" />
            <Gap height={10} />
            <Link title="Forgot My Password" size={12} />
            <Gap height={40} />
            <Button title="Sign In" />
            <Gap height={30} />
            <Link title="Create New Account" size={16} align="center"/>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    page : {
        padding: 40,
        backgroundColor: 'yellow',
        flex: 1
    },
    title: {
        fontSize: 20,
        color: '#112340',
        marginTop: 40,
        marginBottom: 40,
        maxWidth: 153
    }
})
