import React from "react";

function Terms() {
  return (
    <div className=" px-6 py-8 lg:px-16 lg:py-12 rounded-lg shadow-lg max-w-5xl mx-auto my-8">
      <h2 className="text-3xl lg:text-4xl font-bold  text-secondary mb-6 text-center">
        Terms and Conditions
      </h2>
      <p className="text-gray-300 leading-relaxed text-justify">
        Welcome to <span className="font-semibold">Stock Upp</span>, an e-learning platform dedicated to enhancing your knowledge and skills. By accessing or using Stock Upp, you agree to comply with these Terms and Conditions. Please read them carefully.
      </p>

      <ul className="list-disc list-inside mt-6 space-y-4 text-gray-300 leading-relaxed">
        <li>
          <span className="font-semibold">Account Registration:</span> Users must provide accurate and up-to-date information during account registration. You are responsible for maintaining the confidentiality of your login credentials and all activities under your account.
        </li>
        <li>
          <span className="font-semibold">Use of the Platform:</span> Stock Upp grants you a non-exclusive, non-transferable license to access and use the platform for personal and educational purposes only. Any unauthorized reproduction, distribution, or commercial use of our content is strictly prohibited.
        </li>
        <li>
          <span className="font-semibold">Content Ownership:</span> All course materials, videos, quizzes, and other content provided on Stock Upp are the intellectual property of Stock Upp or its licensors. Users may not modify, copy, or distribute this content without prior written consent.
        </li>
        <li>
          <span className="font-semibold">Payments and Subscriptions:</span> Some courses or features may require payment or subscription. All payments are final and non-refundable unless otherwise specified. Users must ensure timely payments to avoid disruption in access.
        </li>
        <li>
          <span className="font-semibold">User Conduct:</span> Users must engage respectfully and refrain from any behavior that may harm others or disrupt the platform, such as sharing offensive content, attempting to hack the system, or misusing features.
        </li>
        <li>
          <span className="font-semibold">Termination:</span> Stock Upp reserves the right to suspend or terminate accounts for violations of these terms or any behavior deemed inappropriate or harmful to the platform or its community.
        </li>
        <li>
          <span className="font-semibold">Third-Party Links:</span> The platform may include links to third-party websites or resources. Stock Upp is not responsible for the content, policies, or practices of these external sites.
        </li>
        <li>
          <span className="font-semibold">Liability Disclaimer:</span> Stock Upp strives to provide accurate and reliable content but does not guarantee the completeness, accuracy, or suitability of any course material. Users acknowledge that they engage with the platform at their own risk.
        </li>
        <li>
          <span className="font-semibold">Amendments:</span> Stock Upp reserves the right to update or modify these Terms and Conditions at any time. Changes will be effective upon posting, and continued use of the platform constitutes acceptance of the revised terms.
        </li>
        <li>
          <span className="font-semibold">Governing Law:</span> These Terms and Conditions are governed by the laws of <span className="italic">[Jurisdiction]</span>, and any disputes arising from the use of Stock Upp will be subject to the exclusive jurisdiction of the courts in <span className="italic">[Jurisdiction]</span>.
        </li>
      </ul>

      <p className="text-gray-300 mt-6">
        For questions or concerns regarding these terms, please contact us at <span className="font-semibold italic">[contact email/phone]</span>.
      </p>

      <p className="text-gray-300 mt-4 text-center font-semibold">
        By using Stock Upp, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.
      </p>
    </div>
  );
}

export default Terms;
