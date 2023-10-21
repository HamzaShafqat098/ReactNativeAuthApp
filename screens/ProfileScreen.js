import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

const ProfileScreen = ({route}) => {
    const {email, username, password} = route.params;
    const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <View style={{backgroundColor: isDarkMode ? "#121212" : "#F5F5F5", flex: 1, padding: 20,}}>
      <View style={styles.header}>
        <Text style={{color: isDarkMode ? "#F5F5F5" : "#121212", fontSize: 24, fontWeight: "bold",}}>{username}</Text>
        <View style={styles.modeContainer}>
            <TouchableOpacity>
                <Ionicons name={isDarkMode ? "sunny-outline" : "moon-outline"} size={24} color={isDarkMode ? "white" : "black"} />
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modeContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
});

export default ProfileScreen;