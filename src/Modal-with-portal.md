**1\. React Portal**

**Concept:**

A **React Portal** allows us to render a child component into a different part of the DOM, outside its parent’s hierarchy.

**Why use Portals?**

- Bypasses parent styles that may interfere with rendering (e.g., overflow: hidden causing clipping issues).
- Allows modal dialogs, pop-ups, and tooltips to be rendered without breaking layout constraints.
- Improves performance by keeping certain elements independent from the main component tree.

**How to Use React Portal?**

**Example: Rendering a component outside the parent’s DOM tree**

```jsx

import React from "react";
import ReactDOM from "react-dom";

const PortalComponent = () => {
  return ReactDOM.createPortal(
    <div className="portal-box">This is rendered using React Portal!</div>,
    document.getElementById("portal-root") // Targeting a different DOM node
  );
};

export default PortalComponent;

```
📌 **In index.html, make sure to add a div to serve as the portal root:**

```html

<div id="root"></div>
<div id="portal-root"></div>

```
**2\. React Modal**

**Concept:**

A **Modal** is a UI component that appears as an overlay, blocking interactions with the underlying page until dismissed.

**Why use a Modal?**

- To show alerts, confirmations, login forms, popups, or additional information without navigating away from the page.
- Ensures users complete an action before returning to the main interface.

**How to Implement a Modal?**

**Example: Simple Modal Component**

```jsx

import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>&times;</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

```
**Usage in a Parent Component**

```jsx
import React, { useState } from "react";
import Modal from "./Modal";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <h2>Hello! This is a Modal.</h2>
      </Modal>
    </div>
  );
};

export default App;

```
**3\. Combining React Portal & Modal**

If we use **React Portal** inside the **Modal Component**, it ensures the modal is rendered outside the parent’s DOM hierarchy.

**Updated Modal with Portal:**

```jsx

import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>&times;</button>
        {children}
      </div>
    </div>,
    document.getElementById("portal-root") // Using Portal
  );
};

export default Modal;

```
Now, the modal is **not confined to its parent but instead renders at the root level**, preventing styling issues.

**Comparison Table: Portal vs. Modal**

| **Feature** | **React Portal** | **React Modal** |
| --- | --- | --- |
| Purpose | Render a component outside the parent’s hierarchy. | Show a UI overlay blocking user interaction with the background. |
| Usage | Useful for modals, tooltips, popups, dropdowns, and overlays. | Used for dialogs, alerts, login forms, and confirmation boxes. |
| CSS Interference | Prevents parent styles from affecting rendering. | May have styling conflicts if not properly structured. |
| ReactDOM.createPortal | Required | Optional (only needed if you want to avoid parent constraints). |

**Conclusion**

- **Portals** help in **rendering elements outside the normal React component tree**.
- **Modals** provide **UI overlays** for user interactions.
- **Combining both** ensures modals behave properly without being affected by parent styles.

**Graphical Representation:**

**React Modal Without Portal (Incorrect Placement)**

📌 **Problem:** The modal is inside the #root, which can cause styling issues.

```mathematica

React App

├── App Component

├── Button (Open Modal)

├── Modal Component (Inside App, may get clipped)
```
**React Modal With Portal (Correct Placement)**

📌 **Solution:** The modal is **moved outside the root** using ReactDOM.createPortal.

```mathematica

React App

├── App Component

├── Button (Open Modal)

├── Modal Component (Rendered inside \`#portal-root\`, outside App)
```
**Visual Flow:**

**1️⃣ Without Portal (Bad Approach)**

- ❌ **Modal gets constrained inside the App's parent div.**
- ❌ **Styles like overflow: hidden can clip the modal.**
- ❌ **Z-index issues may cause display problems.**

📌 **Example Structure:**
```jsx
<div id="root">
  <App>
    <Button> Open Modal </Button>
    <div class="modal"> Modal Content </div>
  </App>
</div>
```

**2️⃣ With Portal (Correct Approach)**

- ✅ **Modal is rendered separately in #portal-root**
- ✅ **No interference from #root styles.**
- ✅ **Easier to manage stacking (z-index) and animations.**

📌 **Example Structure:**
```jsx
<div id="root">
  <App>
    <Button> Open Modal </Button>
  </App>
</div>

<div id="portal-root">
  <div class="modal"> Modal Content </div>
</div>
```
**Summary Table:**

| **Feature** | **Without Portal ❌** | **With Portal ✅** |
| --- | --- | --- |
| Modal Placement | Inside #root | Outside #root, inside #portal-root |
| CSS Interference | Can inherit unwanted styles | Avoids unwanted styles (e.g., overflow) |
| Layout Issues | Can get clipped inside parent | Independent from parent’s layout |
| Z-index Conflicts | Hard to manage stacking | Easily managed |

**Conclusion:**

✅ **React Portals allow us to render UI components outside their parent container**, solving layout and styling .

 **Decoupling UI:** Modals do not interfere with the styling of parent elements.

 **Z-Index Independence:** Elements rendered using portals appear on top.

 **Event Handling:** Maintains natural event bubbling even when rendered outside the DOM.issues commonly faced with modals, tooltips, and popups.
Rendered
[Shared ChatGPT Link](https://chatgpt.com/share/67a75c63-89d0-8011-b95a-7bfa8c03c14b)
