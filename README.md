# Unexpected Null Return in Addition Function

This repository demonstrates a subtle bug in a JavaScript function designed to add two numbers. The function incorrectly handles null values, potentially leading to unexpected behavior.

## Bug Description

The `foo` function is intended to add two numbers.  It correctly returns `null` if either input is `null`.  However, it doesn't account for cases where the inputs might be `undefined` or other falsy values (e.g., 0, false, ""). This could result in incorrect calculations or unexpected null returns.

## Solution

The solution involves using a more robust check to handle various falsy values, ensuring that the function behaves as expected in all scenarios.

## How to reproduce the bug

1. Clone this repository.
2. Run `bug.js` with different inputs, including null, undefined, 0, false, and other falsy values to see the unexpected behavior. 

## How to solve the bug

1. View `bugSolution.js` to see the improved solution. 
2. Run `bugSolution.js` to observe the corrected behavior. 