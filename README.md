## Overview

This project implements a registration form where users can enter their personal information, including name, email, date of birth, password, and sex. Depending on the sex selected (Male or Female), the form dynamically shows or hides the field for the maiden name if the user selects "Female." The form also validates user inputs, including matching passwords and required fields, and provides feedback to the user.

## Features

- **Responsive Design**: The form is responsive and adapts to different screen sizes.
- **Form Validation**: The form ensures that the fields are completed and that passwords match.
- **Dynamic Input**: If the user selects "Female" as their sex, an additional field for the maiden name appears.
- **Feedback Messages**: Provides user-friendly feedback messages for missing fields, mismatched passwords, or successful registration.
  
## Files

1. **HTML (`index.html`)**: The structure of the registration form.
2. **CSS (`style.css`)**: The styling for the form, providing a clean and user-friendly design.
3. **JavaScript (`script.js`)**: Handles dynamic behavior (like showing the maiden name field) and form validation.

---

## Usage

To use this registration form, you need three files:

1. `index.html`: The HTML structure of the registration form.
2. `style.css`: The CSS file to style the form.
3. `script.js`: The JavaScript file for dynamic functionality and validation.

### 1. **HTML File**

The `index.html` file includes:

- **Input Fields**: For name, email, date of birth, password, repeat password, and sex.
- **Dynamic Maiden Name Input**: If "Female" is selected for sex, a maiden name input field will appear.
- **Submit Button**: Submits the form data after validation.

### 2. **CSS File**

The `style.css` file provides the following styles:

- **Responsive Layout**: The form is centered on the page and adapts to different screen sizes.
- **Focus States**: The input fields change their background color when focused to enhance usability.
- **Button Styling**: The submit button is styled with color changes on hover.

### 3. **JavaScript File**

The `script.js` file handles:

- **Dynamic Visibility**: The maiden name input field is shown or hidden based on the user's sex selection.
- **Form Validation**: Ensures that:
  - All fields are filled in.
  - Passwords match.
  - Additional maiden name field is required for females.
  - Displays a success or error message accordingly.

---

## Example

Here’s an example of how the registration form works:

- **Step 1**: User enters their name, email, date of birth, and selects their sex.
- **Step 2**: If the user selects "Female," a maiden name field will appear.
- **Step 3**: User enters their passwords and confirms them.
- **Step 4**: After clicking "Regisztráció", if all conditions are met, a success message will appear. Otherwise, error messages indicate what needs to be corrected (e.g., missing name, unmatched passwords).

---

## Form Validation Rules

1. **Name**: Required field.
2. **Email**: Required field.
3. **Password**: Must be at least 8 characters, include a number, a letter, and a special character.
4. **Password Repeat**: Must match the first password field.
5. **Maiden Name**: Required if the sex is selected as "Female."
6. **Submit**: If all fields pass validation, a "Sikeres regisztráció!" (successful registration) message appears.

---

## Installation

To use this registration form:

1. Download or clone the repository.
2. Open `index.html` in your browser to view the registration form.
3. Ensure `style.css` and `script.js` are linked correctly for proper styling and functionality.

---

## Example of Use

After filling out the form with correct values:

- **Success Message**: "Sikeres regisztráció!" will appear in green.
- **Error Messages**: If any validation fails, appropriate error messages such as "A jelszavak nem egyeznek!" (Passwords do not match) will appear in red.

---
