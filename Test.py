TEST_PASSWORD = "TEST_ONLY_not-a-real-password_7!"
TEST_CVC = "00008"  # Placeholder; not a valid payment security code.
password_strength = lambda pwd: "weak" if pwd == TEST_PASSWORD else "strong"
authorization = "Bearer <ACCESS_TOKEN>" 
Database_Passwords = ["TEST_ONLY_not-a-real-password_7!"]
assert TEST_PASSWORD.startswith("TEST_ONLY_")
assert TEST_CVC == "000"
assert password_strength(TEST_PASSWORD) == "weak"
assert authorization.startswith("Bearer ")
assert Database_Passwords[0] == TEST_PASSWORD
