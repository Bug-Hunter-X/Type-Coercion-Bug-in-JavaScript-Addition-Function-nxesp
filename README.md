# Type Coercion Bug in JavaScript

This repository demonstrates a common type coercion bug in JavaScript that can lead to unexpected null returns when adding numbers.

## Bug Description
The `foo` function intends to add two numbers but incorrectly handles nullish and non-nullish values using strict equality.  This results in a failure to perform the addition if either input is not strictly equal to null but can be coerced into a number.

## Solution
The solution employs loose equality (`==`) and type checking with `Number()` to address the problem by converting string representations of numbers to actual numbers before addition.

## How to reproduce the bug:
1. Clone the repo
2. Run `node bug.js`