import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import type { RootState } from "../store";
import Modal from "../components/Modal";
import { clearCart } from "../store/cartSlice";

export default function Checkout() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false
  });

  function handleBuyClick() {
    setShowModal(true);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors = {
      firstName: !formData.firstName,
      lastName: !formData.lastName,
      email: !formData.email || !formData.email.includes("@")
    };
    setErrors(newErrors);

    if (!Object.values(newErrors).includes(true)) {
      alert("Purchase confirmed!");
      dispatch(clearCart());
      setShowModal(false);
    }
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Checkout</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} x{item.quantity} — ${item.price * item.quantity}
              </li>
            ))}
          </ul>
          <p style={{ fontWeight: "bold" }}>Total: ${total}</p>
          <button onClick={handleBuyClick}>Buy</button>
        </>
      )}

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h2>Confirm Purchase</h2>
          <p>Total: ${total}</p>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              style={{ display: "block", margin: "0.5rem 0", width: "100%" }}
            />
            {errors.firstName && <small style={{ color: "red" }}>First name required</small>}

            <input
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              style={{ display: "block", margin: "0.5rem 0", width: "100%" }}
            />
            {errors.lastName && <small style={{ color: "red" }}>Last name required</small>}

            <input
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={{ display: "block", margin: "0.5rem 0", width: "100%" }}
            />
            {errors.email && <small style={{ color: "red" }}>Valid email required</small>}

            <button type="submit">Confirm</button>
          </form>
        </Modal>
      )}
    </div>
  );
}
