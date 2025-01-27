# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
- 
### **Component Structure**

Divide the application into modular and reusable components:

- **App Component**: The main wrapper that holds all child components.
- **userList folder**: consists of two components.
- **UserList Component**: Handles showing user details in table , Deleting, editing the  user details,Catches errors and displays user-friendly messages.
- **Form Component**: Displaying UserForm , Adding New User Details.

  ### **State Management**

- Use the `state` hook property in function components to manage data and UI updates:
    - **Users**: Store the list of users fetched from the API.
    - **error**: Store any error messages to display when API requests fail.
    - **showForm**: To display form and user details.
    - **editingUser**: TO edit the existing userdetails in table.
    - **formData**: Store user details that are entered in the form.
