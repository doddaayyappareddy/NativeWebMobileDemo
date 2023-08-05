import React, { FC, ReactElement, useState } from "react";
import { Button, TextInput, View } from "react-native";
import StyleSheet from 'react-native-media-query';

export const UserRegistration: FC<{}> = ({}): ReactElement => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {ids, styles} = StyleSheet.create({
        input: {
          height: 40,
          marginBottom: 10,
          margin: 10,
          backgroundColor: '#fff',
          borderWidth:1,
          borderColor: "blue",
          borderRadius:2,
          paddingLeft:2,
          '@media (max-width: 1600px) and (min-width: 800px)': {
            width:400,
          }
        },
        btn: {
            margin: 10,
            '@media (max-width: 1600px) and (min-width: 800px)': {
                width:400,
                
            }
        }
      });
    return (
      <>
        <TextInput
          style={styles.input}
          value={username}
          placeholder={"Username"}
          onChangeText={(text) => setUsername(text)}
          dataSet={{ media: ids.input }}
          autoCapitalize={"none"}
        />
        <TextInput
          style={styles.input}
          value={password}
          placeholder={"Password"}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          dataSet={{ media: ids.input }}
        />
        <View style={styles.btn} dataSet={{ media: ids.btn }}>
        <Button title={"Sign Up"} 
         onPress={() => {}} />
         </View>
      </>
    );
  };
  
  
 