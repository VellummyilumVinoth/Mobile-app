/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React ,{useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

import {useTheme} from 'react-native-paper';
import styles from './styles';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import Animated from 'react-native-reanimated';
import axios from '../../../../routes';

const EditProfileScreen = () => {
  const {colors} = useTheme();

  const [user, setUser] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');

  const onChangeFirstNameHandler = (firstName) => {
    setFirstName(firstName);
  };
  const onChangeLastNameHandler = (lastName) => {
    setLastName(lastName);
  };
  const onChangeEmailHandler = (email) => {
    setEmail(email);
  };
  const onChangePhoneNumberHandler = (number) => {
    setNumber(number);
  };
  const onChangePasswordHandler = (password) => {
    setPassword(password);
  };

  const getUser = async () => {
    await axios.get('http://10.0.2.2:5000/consumer/62132b7bc4afd22e5fc49677')
      .then(response => {
        setUser(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          margin: 20,
        }}>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              marginTop: 10,
              fontSize: 18,
              fontWeight: 'bold',
              color: '#FFFFFF',
            }}>
            {user._id}
          </Text>
        </View>

        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
          <TextInput
            placeholder="First Name"
            placeholderTextColor="#666666"
            autoCorrect={false}
            value={firstName}
            onChangeText={onChangeFirstNameHandler}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
          <TextInput
            placeholder="Last Name"
            placeholderTextColor="#666666"
            autoCorrect={false}
            value={lastName}
            onChangeText={onChangeLastNameHandler}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <Feather name="phone" color={colors.text} size={20} />
          <TextInput
            placeholder="Phone"
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            autoCorrect={false}
            value={number}
            onChangeText={onChangePhoneNumberHandler}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="envelope-o" color={colors.text} size={20} />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#666666"
            keyboardType="email-address"
            autoCorrect={false}
            value={email}
            onChangeText={onChangeEmailHandler}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="lock" color={colors.text} size={20} />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#666666"
            autoCorrect={false}
            value={password}
            onChangeText={onChangePasswordHandler}
            secureTextEntry
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
          <Text style={styles.panelButtonTitle}>Save</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default EditProfileScreen;
