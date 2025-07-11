import Ionicons from "@expo/vector-icons/Ionicons";
import { Formik } from "formik";
import React, { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .required("Full name is required")
    .min(2, "Full name must be at least 2 characters long")
    .max(50, "Full name must not exceed 50 characters"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  employeeId: Yup.string()
    .required("Employee ID is required")
    .matches(
      /^EMP[0-9]{3,6}$/,
      "Employee ID must be in format EMP followed by 3-6 digits"
    ),
  department: Yup.string()
    .required("Department is required")
    .min(2, "Department must be at least 2 characters"),
  phoneNumber: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]{10}$/, "Phone number must be a valid 10-digit number"),
  position: Yup.string()
    .required("Position is required")
    .min(2, "Position must be at least 2 characters"),
  salary: Yup.number()
    .required("Salary is required")
    .positive("Salary must be positive")
    .min(20000, "Salary must be at least $20,000"),
});

export default function EmployeeForm() {
  const [isFullTime, setIsFullTime] = useState(false);

  const handleSubmit = (
    values: {
      fullName: string;
      email: string;
      employeeId: string;
      department: string;
      phoneNumber: string;
      position: string;
      salary: string;
    },
    {
      resetForm,
    }: import("formik").FormikHelpers<{
      fullName: string;
      email: string;
      employeeId: string;
      department: string;
      phoneNumber: string;
      position: string;
      salary: string;
    }>
  ) => {
    const employeeData = {
      ...values,
      employmentType: isFullTime ? "Full-Time" : "Part-Time",
    };
    console.log("Submitted Employee Data:", employeeData);
    Alert.alert("Success", "Employee information saved successfully!", [
      { text: "OK", onPress: () => resetForm() },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <Ionicons
            name="briefcase"
            size={60}
            color="#007bff"
            style={styles.icon}
          />
          <Text style={styles.title}>Employee Information</Text>
          <Text style={styles.subtitle}>Enter the employee details below:</Text>

          <Formik
            initialValues={{
              fullName: "",
              email: "",
              employeeId: "",
              department: "",
              phoneNumber: "",
              position: "",
              salary: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View style={styles.form}>
                <View style={styles.inputContainer}>
                  <Ionicons
                    name="person-outline"
                    size={20}
                    color="#666"
                    style={styles.inputIcon}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Full Name"
                    onChangeText={handleChange("fullName")}
                    onBlur={handleBlur("fullName")}
                    value={values.fullName}
                  />
                </View>
                {errors.fullName && touched.fullName && (
                  <Text style={styles.errorText}>{errors.fullName}</Text>
                )}

                <View style={styles.inputContainer}>
                  <Ionicons
                    name="mail-outline"
                    size={20}
                    color="#666"
                    style={styles.inputIcon}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                </View>
                {errors.email && touched.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}

                <View style={styles.inputContainer}>
                  <Ionicons
                    name="id-card-outline"
                    size={20}
                    color="#666"
                    style={styles.inputIcon}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Employee ID (e.g., EMP123)"
                    onChangeText={handleChange("employeeId")}
                    onBlur={handleBlur("employeeId")}
                    value={values.employeeId}
                  />
                </View>
                {errors.employeeId && touched.employeeId && (
                  <Text style={styles.errorText}>{errors.employeeId}</Text>
                )}

                <View style={styles.inputContainer}>
                  <Ionicons
                    name="business-outline"
                    size={20}
                    color="#666"
                    style={styles.inputIcon}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Department"
                    onChangeText={handleChange("department")}
                    onBlur={handleBlur("department")}
                    value={values.department}
                  />
                </View>
                {errors.department && touched.department && (
                  <Text style={styles.errorText}>{errors.department}</Text>
                )}

                <View style={styles.inputContainer}>
                  <Ionicons
                    name="call-outline"
                    size={20}
                    color="#666"
                    style={styles.inputIcon}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Phone Number"
                    onChangeText={handleChange("phoneNumber")}
                    onBlur={handleBlur("phoneNumber")}
                    value={values.phoneNumber}
                    keyboardType="phone-pad"
                  />
                </View>
                {errors.phoneNumber && touched.phoneNumber && (
                  <Text style={styles.errorText}>{errors.phoneNumber}</Text>
                )}

                <View style={styles.inputContainer}>
                  <Ionicons
                    name="briefcase-outline"
                    size={20}
                    color="#666"
                    style={styles.inputIcon}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Position"
                    onChangeText={handleChange("position")}
                    onBlur={handleBlur("position")}
                    value={values.position}
                  />
                </View>
                {errors.position && touched.position && (
                  <Text style={styles.errorText}>{errors.position}</Text>
                )}

                <View style={styles.inputContainer}>
                  <Ionicons
                    name="cash-outline"
                    size={20}
                    color="#666"
                    style={styles.inputIcon}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Salary"
                    onChangeText={handleChange("salary")}
                    onBlur={handleBlur("salary")}
                    value={values.salary}
                    keyboardType="numeric"
                  />
                </View>
                {errors.salary && touched.salary && (
                  <Text style={styles.errorText}>{errors.salary}</Text>
                )}

                {/* Employment Type Toggle */}
                <View style={styles.toggleContainer}>
                  <Text style={styles.toggleLabel}>Employment Type:</Text>
                  <TouchableOpacity
                    style={[
                      styles.toggleButton,
                      isFullTime && styles.toggleButtonActive,
                    ]}
                    onPress={() => setIsFullTime(!isFullTime)}
                  >
                    <Text
                      style={[
                        styles.toggleText,
                        isFullTime && styles.toggleTextActive,
                      ]}
                    >
                      {isFullTime ? "Full-Time" : "Part-Time"}
                    </Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  style={styles.submitButton}
                  onPress={() => handleSubmit()}
                >
                  <Ionicons
                    name="checkmark-circle-outline"
                    size={20}
                    color="#fff"
                  />
                  <Text style={styles.submitButtonText}>Save Employee</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  icon: {
    alignSelf: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 40,
  },
  form: {
    width: "100%",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    backgroundColor: "#fff",
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  errorText: {
    color: "#dc3545",
    fontSize: 14,
    marginTop: -10,
    marginBottom: 10,
  },
  toggleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  toggleLabel: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
  toggleButton: {
    backgroundColor: "#e9ecef",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  toggleButtonActive: {
    backgroundColor: "#007bff",
    borderColor: "#007bff",
  },
  toggleText: {
    color: "#666",
    fontSize: 14,
    fontWeight: "500",
  },
  toggleTextActive: {
    color: "#fff",
  },
  submitButton: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
