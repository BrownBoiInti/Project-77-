import React, {Component} from 'react'
import {Text, View} from 'react-native'


export default class StarMaps extends Componets {
    render(){
        return(
            <View
                style = {{
                    flex: 1,
                    justifyContent: "center", 
                    alignItems: "center"
                }}>
                <Text>Star Maps</Text>
            </View>
        )
    }
}