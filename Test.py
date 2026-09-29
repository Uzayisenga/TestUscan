"""Synthetic sensitive-looking values for UI and validation tests only.

These are deliberately non-functional placeholders, not real credentials or
payment data. Keep them out of production and never use them to access accounts.
"""

TEST_PASSWORD = "TEST_ONLY_not-a-real-password_7!"
TEST_CVC = "000"  # Placeholder; not a valid payment security code.

assert TEST_PASSWORD.startswith("TEST_ONLY_")
assert TEST_CVC == "000"