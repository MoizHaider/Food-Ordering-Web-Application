import React, { useState } from "react";

export default function () {
  useState();
  return (
    <div>
      <li>Items</li>
      <p>Choose Location</p>
      <button>Use Current Location</button>
      <button>Other Location...</button>
      <div>Total Price</div>
      <button>Confirm Order</button>
    </div>
  );
}
