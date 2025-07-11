import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function AuthScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Ionicons
          name="lock-closed"
          size={80}
          color="#007bff"
          style={styles.icon}
        />
        <Text style={styles.title}>Authentication</Text>
        <Text style={styles.subtitle}>Choose your authentication method</Text>

        <Link href="/auth/signin" asChild>
          <TouchableOpacity
            style={{ ...styles.button, ...styles.signInButton }}
          >
            <Ionicons name="log-in-outline" size={20} />
            <Text style={styles.signInText}>Sign In</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/auth/signup" asChild>
          <TouchableOpacity
            style={{ ...styles.button, ...styles.signUpButton }}
          >
            <Ionicons name="person-add-outline" size={20} color="#007bff" />
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f3f5",
  },
  card: {
    marginTop: 100,
    backgroundColor: "#fff",
    paddingVertical: 40,
    paddingHorizontal: 25,
    borderRadius: 16,
    alignItems: "center",
    marginHorizontal: 20,
    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    // Elevation for Android
    elevation: 5,
  },
  icon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#212529",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: "#6c757d",
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 15,
  },
  signInButton: {
    backgroundColor: "#007bff",
  },
  signInText: {
    color: "#212529",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 10,
  },
  signUpButton: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#007bff",
  },
  signUpText: {
    color: "#007bff",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 10,
  },
});
