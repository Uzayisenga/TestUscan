/**
 * DUMMY TEST SUITE FOR SECURITY SCANNERS
 * Standard patterns, obfuscations, and edge cases.
 */

// 1. API Keys & Cloud Credentials
const AWS_SECRET_ACCESS_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"; // 40-char Base64
const GOOGLE_API_KEY = "AIzaSyD-EXAMPLE_KEY_FOR_TESTING_123456";
const STRIPE_SECRET_KEY = "sk_test_51MzEXAMPLESECRETKEY1234567890";
const GITHUB_PAT = "ghp_EXAMPLETOKEN1234567890abcdefghijklmnopqrstuvwxyz";

// 2. Private Keys & Tokens
const DUMMY_RSA_PRIVATE_KEY = `-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEAzx2EXAMPLEKEY...
-----END RSA PRIVATE KEY-----`;

const DUMMY_JWT_BEARER = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

// 3. Sensitive PII (Personally Identifiable Information)
const TEST_USER = {
  ssn: "000-00-0000",
  creditCard: "4111-1111-1111-1111", // Visa Test Card
  cvv: "123",
  dateOfBirth: "1990-01-01",
  email: "john.doe@example.com",
  phone: "+1-555-019-2834"
};

// 4. Encoded / Obfuscated Strings (Testing Obfuscation Detection)
const BASE64_ENCODED_SECRET = "cG3zc3dvcmQxMjM0NTY="; // "password12345" in base64
const HEX_ENCODED_KEY = "4a616e65446f655365637265744b6579"; // Hex string

// 5. Hardcoded Database Connection Strings
const MONGO_URI = "mongodb://dbuser:SuperSecretPass123!@localhost:27017/testdb";
const POSTGRES_URI = "postgres://admin:P%40ssw0rd2026@127.0.0.1:5432/production_db";

// 6. False Positive / Mock Edge Cases (Should NOT flag if scanner handles placeholders)
const MOCK_CONFIG = {
  apiToken: "Bearer <ACCESS_TOKEN>",
  testPassword: "TEST_ONLY_not-a-real-password_7!",
  environment: "development"
};