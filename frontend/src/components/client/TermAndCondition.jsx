import React from 'react';

export default function TermAndCondition() {
  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      {/* Terms & Conditions Section */}
      <h1 className="text-4xl font-bold mb-6">Terms & Conditions</h1>
      <p className="text-lg mb-4">
        By using our website - Dummy-tickets.com, you acknowledge reading and accepting these terms & conditions and agree not to violate our policies.
      </p>
      <p className="text-lg mb-8">
        Should you have any inquiries or require clarification regarding these terms and conditions or the privacy policy, please do not hesitate to reach out to us through our contact page at
        <a href="https://dummy-tickets.com/contact/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline ml-2">
          https://dummy-tickets.com/contact/
        </a>.
      </p>

      {/* Privacy Policy Section */}
      <h3 className="text-3xl font-semibold mb-4">Privacy Policy</h3>
      <p className="text-lg mb-4">
        Dummy-tickets.com uses the information collected for various purposes, including:
      </p>
      <ul className="list-disc list-inside mb-8 space-y-2 text-lg">
        <li>1. Providing and maintaining the Service.</li>
        <li>2. Offering customer care and support.</li>
        <li>3. Providing analysis or valuable information to enhance the Service.</li>
        <li>4. Allowing you to engage in interactive features of our Service when you opt to do so.</li>
        <li>5. Notifying you about changes to our Service.</li>
        <li>6. Detecting, preventing, and addressing technical issues.</li>
        <li>7. Monitoring the usage of the Service.</li>
      </ul>
      <p className="text-lg mb-8">
        It is important to note that your information, once provided through the booking form, will not be retained in our system after the order is completed. If, for any reason, you wish for us to maintain a record of your details, please inform us via email. Rest assured, your privacy and information security are our priorities.
      </p>
      <p className="text-lg mb-8">
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
      </p>

      {/* General Terms Section */}
      <h2 className="text-3xl font-semibold mb-4">General Terms</h2>
      <ul className="list-disc list-inside mb-8 space-y-2 text-lg">
        <li>Before making any booking, the user is obliged to read and agree to the rules and restrictions.</li>
        <li>This is a flight reservation and not a confirmed ticket. A flight reservation is the reservation of a seat in a particular airline for a specific time period, and you cannot travel on the flight reservation.</li>
        <li>If your visa is rejected for any reason, "Dummy-tickets.com" holds no responsibility.</li>
        <li>We do our best to deliver the ticket on time, but delays due to technical errors may occur. "Dummy-tickets.com" bears no responsibility for such delays.</li>
        <li>By using this site, you give us permission to contact you via WhatsApp, email, messaging, or other forms of communication for marketing and promotional purposes.</li>
        <li>Dummy-tickets.com reserves the right to deny services and provide a refund for any reason.</li>
      </ul>

      {/* Cancellation & Refund Policy Section */}
      <h1 className="text-3xl font-semibold mb-4">Cancellation & Refund Policy</h1>
      <ul className="list-disc list-inside mb-8 space-y-2 text-lg">
        <li>We do not offer refunds for any reasons such as visa appointment rescheduling, changes in travel plans, or other reasons.</li>
        <li>Refunds will only be processed if we fail to provide the specific services.</li>
        <li>Refunds will be made only through the original mode of payment.</li>
        <li>The refund process will take 7 to 10 working days. Users may request a full refund for duplicate payments caused by technical issues with the site.</li>
      </ul>
    </div>
  );
}
