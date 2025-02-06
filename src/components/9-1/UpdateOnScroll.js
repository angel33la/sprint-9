// Choosing lifecycle method names that have a clearer, more limited purpose.

// Making certain lifecycles static to prevent unsafe access of instance properties.

class ExampleComponent extends React.Component {
  // Initialize state in constructor,
  // Or with a property initializer.
  state = { isScrollingDown: false, lastRow: null };
  static getDerivedStateFromProps(props, state) {
    if (props.currentRow !== state.lastRow) {
      return {
        isScrollingDown: props.currentRow > state.lastRow,
        lastRow: props.currentRow,
      };
    }
    // Return null to indicate no change to state.
    return null;
  }
}
