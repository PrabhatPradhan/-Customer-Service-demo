import EnquiryForm from "../Componets/EnquiryForm/EnquiryForm";
import Footer from "../Componets/Footer/Footer";
import Navbar from "../Componets/Navbar/Navbar";
import ServiceCenterCard from "../Componets/ServiceCenterCard/ServiceCenterCard";
import Link from "next/link";
import StatsOfNumbers from "../Componets/StatsOfNumbers/StatsOfNumbers";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <ServiceCenterCard />
      <EnquiryForm />
      <section
        style={{
          backgroundImage: `url('https://www.mothersrecipe.com/cdn/shop/files/privacy-policy.png?v=1689226683')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="bg-gradient-to-r from-[#f0f4ff] to-[#eaf0fc] py-16 px-[5%] flex flex-col md:flex-row items-center justify-between"
      >
        <div>
          <h1 className="text-4xl md:text-5xl mt-10 font-bold text-[#0f172a] mb-2">
            PrivacyPolicy
          </h1>
          <p className="text-[#666] text-base">
            <Link href="/">Home</Link> / PrivacyPolicy
          </p>
        </div>
      </section>

      <div className="px-6 py-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between w-full px-6 py-12 bg-gradient-to-r from-blue-50 to-white">
          <div className="md:w-1/2 space-y-4 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold">
              <span className="text-orange-500">Privacy Policies</span> are
              required
              <br />
              by law get compliant today
            </h1>
            <p className="text-gray-600">
              We generate custom-made Privacy Policies in seconds to help keep
              your business safe. No jargon. No nonsense. No mucking around.
            </p>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img
              src="https://t4.ftcdn.net/jpg/06/28/95/19/360_F_628951920_Wpi0yQTeJ16NGVC37WkCOsRoDqTMxCqU.jpg"
              alt="Privacy document illustration"
              width={500}
              height={700}
            />
          </div>
        </div>

        <div className="bg-white text-gray-500 px-4 py-12 sm:px-6 lg:px-1  max-w-6xl mx-auto">
           

          <p className="mb-4 text-sm sm:text-base">
            At <strong>Authorised
Customer Service
</strong>, we respect your privacy and are
            committed to protecting your personal data. This Privacy Policy
            outlines how we collect, use, and safeguard your information when
            you use our services.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2 text-orange-500">
            1. Information We Collect
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
            <li>
              Personal information (e.g., name, email, phone number) you provide
              during sign-up or contact.
            </li>
            <li>
              Device data like IP address, browser type, and operating system.
            </li>
            <li>
              Usage data such as pages visited, time spent, and interactions
              with our website.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-2 text-orange-500">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
            <li>To provide and maintain our services.</li>
            <li>
              To communicate with you, including responses to inquiries and
              service updates.
            </li>
            <li>
              To improve user experience and optimize website performance.
            </li>
            <li>To comply with legal obligations.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-2 text-orange-500">
            3. Sharing Your Information
          </h2>
          <p className="text-sm sm:text-base">
            We do not sell your personal information. However, we may share your
            data with:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base mt-2">
            <li>
              Service providers who help us operate our business (e.g., hosting,
              analytics).
            </li>
            <li>
              Legal authorities when required by law or to protect our rights.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-2 text-orange-500">
            4. Data Security
          </h2>
          <p className="text-sm sm:text-base">
            We implement security measures to protect your data. However, no
            online transmission or storage is 100% secure.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2 text-orange-500">
            5. Your Rights
          </h2>
          <p className="text-sm sm:text-base mb-2">You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
            <li>Access, update, or delete your personal data.</li>
            <li>Withdraw consent for data processing at any time.</li>
            <li>
              Lodge a complaint with your local data protection authority.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-2 text-orange-500">
            6. Cookies
          </h2>
          <p className="text-sm sm:text-base">
            We use cookies to improve user experience. You can control cookie
            settings in your browser.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2 text-orange-500">
            7. Updates to This Policy
          </h2>
          <p className="text-sm sm:text-base">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with a revised date.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2 text-orange-500">
            8. Contact Us
          </h2>
          <p className="text-sm sm:text-base">
            If you have any questions or concerns, please contact us at: <br />
            <strong>Email:</strong> support@yourcompany.com <br />
            <strong>Phone:</strong> +1 (123) 456-7890
          </p>

          
        </div>

        {/* <section className="mt-20">
          <h2 className="text-2xl font-bold text-center mb-6">
            Privacy Policies with global coverage
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            Almost every country in the world has some kind of privacy law to
            protect their citizen&rsquo;s personal information. That&rsquo;s why
            every Privacy Policy we generate is adapted to comply with the major
            privacy laws relevant to you. Just tell us where you operate and
            we&rsquo;ll customize your Privacy Policy accordingly.
          </p>
          <div className="grid md:grid-cols-3 gap-10 mt-10 text-center">
            <div>
              <h3 className="text-lg font-semibold">CCPA & CalOPPA</h3>
              <p className="text-gray-600">
                CCPA & CalOPPA protect personal data belonging to residents of
                California. If you collect or store information from users in
                the US, we&rsquo;ll make sure your Privacy Policy complies with
                CCPA &amp; CalOPPA laws.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">GDPR</h3>
              <p className="text-gray-600">
                GDPR controls data privacy in the EU. If your business processes
                data from EU customers or site/app users, we will ensure your
                Privacy Policy includes the necessary GDPR wording.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">The rest of the world</h3>
              <p className="text-gray-600">
                Our Privacy Policies are adapted to fit with laws from areas
                around the world to keep your business safe.
              </p>
            </div>
          </div>
        </section> */}
      </div>

      <StatsOfNumbers />
      <Footer />
    </>
  );
}

function Feature({ title, description }) {
  return (
    <div className="p-4 border rounded-lg shadow hover:shadow-md transition">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
