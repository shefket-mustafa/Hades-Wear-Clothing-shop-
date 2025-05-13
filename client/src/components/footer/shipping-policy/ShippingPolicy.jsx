import React from 'react';

export default function ShippingPolicy() {
  return (
    <div className="shipping-policy">
      <h1>Shipping Policy — Hades Wear</h1>

      <p>Hades Wear ships worldwide, offering fast and reliable delivery to ensure a great shopping experience wherever you are.</p>

      <h2>Order Processing & Delivery Times</h2>
      <p>Once your order is confirmed, we begin processing it using trusted logistics partners. Estimated delivery times:</p>

      <table>
        <thead>
          <tr>
            <th>Country/Region</th>
            <th>Delivery Time</th>
            <th>Shipping Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Spain, Balearic Islands, Portugal</td><td>1-3 business days</td><td>€5.99</td></tr>
          <tr><td>Germany, Austria, Belgium, etc.</td><td>3-10 business days</td><td>€6.99</td></tr>
          <tr><td>Japan, Turkey, India</td><td>8-10 business days</td><td>€6.99</td></tr>
          <tr><td>Nordics, UK, Baltics</td><td>3-10 business days</td><td>€7.99</td></tr>
          <tr><td>Ireland, Switzerland, Croatia</td><td>5-15 business days</td><td>€8.99</td></tr>
          <tr><td>Balkans, East Europe</td><td>5-15 business days</td><td>€9.99</td></tr>
          <tr><td>Brazil</td><td>7-15 business days</td><td>€6.99</td></tr>
          <tr><td>Mexico, Chile, Colombia</td><td>7-15 business days</td><td>€9.99</td></tr>
          <tr><td>Rest of the World</td><td>7-15 business days</td><td>€20.00</td></tr>
        </tbody>
      </table>

      <p><strong>Free shipping on orders over €59</strong>. Delivery time is calculated from shipment confirmation.</p>

      <h2>Shipping Options</h2>
      <p>We offer:</p>
      <ul>
        <li>Standard home delivery (global)</li>
        <li>Pickup point delivery (available in select EU countries)</li>
      </ul>

      <h2>Busy Periods</h2>
      <p>During sales like Black Week or Christmas, deliveries may be delayed due to volume.</p>

      <h2>Customs & International Orders</h2>
      <p>Orders may be subject to customs duties. If you refuse delivery or fail to pay duties, the order will not be refunded. We’ll deduct the equivalent shipping cost if free shipping was applied.</p>

      <h2>Receiving Orders</h2>
      <p>If your package is damaged or tampered with, refuse it or report within 24h with photos. Without this, we cannot process claims.</p>

      <h2>Delivery Issues</h2>
      <p>If your tracking shows delivery but you didn`t receive it, contact us within 7 days to open an investigation.</p>

      <h2>Missed Deliveries</h2>
      <p>If delivery fails after several attempts, your order is returned to us and we will issue a refund.</p>

      <p>Questions? Contact our support team via the Hades Wear Contact Form.</p>
    </div>
  );
}
