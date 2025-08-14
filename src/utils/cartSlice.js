import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },

    // Flexible remove:
    // - { index } -> remove by index
    // - { id } or whole item with .id / .card.info.id / .info.id -> remove by id
    // - no payload -> pop last
    removeOne(state, action) {
      const p = action.payload;

      // 1) by index
      if (Number.isInteger(p?.index)) {
        const i = p.index;
        if (i >= 0 && i < state.items.length) state.items.splice(i, 1);
        return;
      }

      // 2) by id (payload may be the id, an object with id, or the full item)
      const pid =
        (typeof p === "string" || typeof p === "number") ? p :
        p?.id ??
        p?.card?.info?.id ??
        p?.info?.id ??
        undefined;

      if (pid != null) {
        state.items = state.items.filter((it) => {
          const info = it.card?.info ?? it.info ?? it;
          return String(info?.id) !== String(pid);
        });
        return;
      }

      // 3) default: pop
      state.items.pop();
    },

    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addItem, removeOne, clearCart } = cartSlice.actions;

// Optional selectors
export const selectCartItems = (s) => s.cart.items;
export const selectCartCount = (s) => s.cart.items.length;

export default cartSlice.reducer;
