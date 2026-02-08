# Tab Form Component

A multi-step form component built with React that implements a tabbed interface for collecting user information across multiple steps with validation.

## Overview

This project demonstrates a tabbed form interface where users can navigate through different sections (tabs) to fill out their information. Each tab has its own validation logic, and the form prevents progression until all validations are satisfied.

## Features

- **Multi-Step Form**: Three tabs for different sections of form data
- **Tab Navigation**: Easy switching between form sections
- **Form Validation**: Built-in validation for each tab
- **Error Display**: Real-time error messages for invalid fields
- **Data Persistence**: Form state maintained as users navigate between tabs
- **Submit Workflow**: Complete form validation before submission

## Project Structure

```
src/
├── components/
│   ├── TabForm.jsx       # Main tab form container
│   ├── Profile.jsx       # Profile tab with name, age, email
│   ├── Settings.jsx      # Settings tab with theme selection
│   └── Interests.jsx     # Interests tab with checkboxes
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Component Details

### TabForm.jsx
The main container component that:
- Manages active tab state
- Handles all form data across tabs
- Implements validation logic for each tab
- Manages form submission
- Provides navigation between tabs

**Key Methods:**
- `handleTabChange(t)` - Switch to specific tab
- `goToPrevTab()` - Navigate to previous tab with validation
- `goToNextTab()` - Navigate to next tab with validation
- `validateAllTabs()` - Validate all tabs before final submission
- `submitForm()` - Handle final form submission

### Profile.jsx
Collects user profile information:
- **Name**: Text input (minimum 3 characters required)
- **Age**: Number input (minimum 18 years required)
- **Email**: Email input (minimum 3 characters required)

### Settings.jsx
User preferences:
- **Theme**: Radio button selection between "dark" and "light" themes

### Interests.jsx
User interests selection:
- **Checkboxes** for multiple interests: Coding, Chess, Volleyball, Gaming, Music
- Minimum 1 interest must be selected

## Form Data Structure

```javascript
{
  name: string,        // User's name
  age: number,         // User's age
  email: string,       // User's email address
  interests: array,    // Array of selected interests
  theme: string        // Selected theme ('dark' or 'light')
}
```

## Validation Rules

| Tab | Field | Validation Rule |
|-----|-------|-----------------|
| Profile | Name | Length ≥ 3 characters |
| Profile | Age | ≥ 18 years |
| Profile | Email | Length ≥ 3 characters |
| Interests | Interests | At least 1 selected |
| Settings | Theme | No validation required |

## Getting Started

### Prerequisites
- Node.js and npm installed

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### Build for Production

```bash
npm run build
```

### Lint Code

```bash
npm run lint
```

## Usage

The form automatically validates each tab before allowing navigation. Users can:

1. Fill out profile information (name, age, email)
2. Select a theme preference
3. Choose at least one interest
4. Submit the form after all validations pass

The form will jump to the first invalid tab if any validation fails during submission.

## Technologies Used

- **React** (v19.2.0) - UI library
- **Vite** (v7.2.4) - Build tool
- **JavaScript ES6+** - Modern JavaScript

## Notes

- Form validation occurs on tab change and form submission
- Error messages display inline below invalid fields
- The theme and settings don't have validation but must be completed
- Form data resets to default values after successful submission
