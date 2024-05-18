import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image, Button } from 'react-native';
// this is profile page
const Student = ({navigation}) => {
  const [studentData, setStudentData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //Profile
  // This api is work for abhinay
  // https://iltsapi.ilakshyaerp.in/student/getById/1/6/2
  useEffect(() => {
    fetch('https://iltsapi.ilakshyaerp.in/student/getById/1/6/1')
      .then ((response) => response.json())
      .then( (data) => {
        setStudentData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
   
  if (!studentData) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No data found</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Placeholder for an avatar - Replace with actual image source */}
        <Image
          source={{ uri:'https://via.placeholder.com/100'}}
          style={styles.avatar}
        />
        <Text style={styles.name}>Rahul Sharma</Text>
        <Text style={styles.name}>+044 73783783</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.detailText}> Address : Deoria</Text>
        <Text style={styles.detailText}> City : Gorakhpur</Text>
        <Text style={styles.detailText}> Zipcode : 473837</Text>
        <Text style={styles.detailText}> Rohit@gmail.com</Text>
      </View>
      
      <View style={{flex:1}}>
      <Button
        title="Logout"
        onPress={() => navigation.navigate('home')}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    paddingTop: 20,
    margin:10,
    backgroundColor:"pink"
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  details: {
    alignItems: 'flex-start',
  },
  detailText: {
    fontSize: 16,
    marginVertical: 2,
  },
});

export default Student;
