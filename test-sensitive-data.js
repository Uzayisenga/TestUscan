/**
 * DUMMY TEST SUITE FOR SECURITY SCANNERS
 * Standard patterns, obfuscations, and edge cases.
 */

// 1. API Keys & Cloud Credentials
const AWS_SECRET_ACCESS_KEY = "wJal••••••••••••••••••••••••••••••••••••"; // 40-char Base64
const GOOGLE_API_KEY = "AIzaSyD-EXAMPLE_KEY_FOR_TESTING_123456";
const STRIPE_SECRET_KEY = "sk_t••••••••••••••••••••••••••••••••••";
const GITHUB_PAT = "ghp_••••••••••••••••••••••••••••••••••••••••••••••••";

// 2. Private Keys & Tokens
const DUMMY_RSA_PRIVATE_KEY = `----•••••••••••••••••••••••••••
MIIEowIBAAKCAQEAzx2EXAMPLEKEY...
-----END RSA PRIVATE KEY-----`;

const DUMMY_JWT_BEARER = "Bearer eyJh•••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••";

// 3. Sensitive PII (Personally Identifiable Information)
const TEST_USER = {
  ssn: "000-••••••••",
  creditCard: "4111•••••••••••••••", // Visa Test Card
  cvv: "123",
  dateOfBirth: "1990-01-01",
  email: "john••••••••••••••••",
  phone: "+1-55••••••••••"
};

// 4. Encoded / Obfuscated Strings (Testing Obfuscation Detection)
const BASE64_ENCODED_SECRET = "cG3zc3dvcmQxMjM0NTY="; // "password12345" in base64
const HEX_ENCODED_KEY = "4a616e65446f655365637265744b6579"; // Hex string

// 5. Hardcoded Database Connection Strings
const MONGO_URI = "mong•••••••••••••••••••••••••••••••••••••••••••••••••••••••";
const POSTGRES_URI = "post••••••••••••••••••••••••••••••••••••••••••••••••••••••••";

// 6. False Positive / Mock Edge Cases (Should NOT flag if scanner handles placeholders)
const MOCK_CONFIG = {
  apiToken: "Bearer <ACCESS_TOKEN>",
  testPassword: "TEST_ONLY_not-a-real-password_7!",
  environment: "development"
};