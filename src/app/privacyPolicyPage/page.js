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
          backgroundImage: `url('https://images.unsplash.com/photo-1713557112617-e12d67bddc3a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, // Replace with actual image path or URL
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="bg-gradient-to-r from-[#f0f4ff] to-[#eaf0fc] py-16 px-[5%] flex flex-col md:flex-row items-center justify-between"
      >
        <div>
          <h1 className="text-4xl md:text-5xl mt-10 font-bold text-[#0f172a] mb-2">
            {" "}
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
              <span className="text-orange-400">Privacy Policies</span> are
              required
              <br />
              by law get compliant today
            </h1>
            <p className="text-gray-600">
              We generate custom-made Privacy Policies in second to help keep
              your business safe. No jargon. No nonsense. No mucking around.
            </p>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img
              src="https://t4.ftcdn.net/jpg/06/28/95/19/360_F_628951920_Wpi0yQTeJ16NGVC37WkCOsRoDqTMxCqU.jpg"
              alt="Privacy document illustration"
              width={400}
              height={700}
            />
          </div>
        </div>

        <section className="mt-20">
          <h2 className="text-2xl font-bold text-center mb-10">
            Best feature of Privacy Policies
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <Feature
              title="Protect yourself and your business"
              description="Not knowing the laws and regulations can expose you and your business to a liability in a number of different ways. Our service can help you prepare policies that are current and compliant with the latest government, legal, and service requirements."
            />
            <Feature
              title="Save thousands on legal fees"
              description="Our attorney-drafted policies are completely free for personal and non-commercial use. We also offer affordable paid solutions to additional and advanced premium features at a fraction of the cost of hiring a lawyer."
            />
            <Feature
              title="Global coverage"
              description="We make every effort to cover every country’s laws and regulations by including the strictest guidelines implemented in each country. Let us serve you wherever you are with a custom-tailored policy according just for you."
            />
            <Feature
              title="No more generic templates"
              description="Only a few steps now, can accurately describe your website, mobile app, blog, store, or your message and we’ll do the rest. Easily build the initiatives you need to operate and maintain the information you provide for the best results."
            />
            <Feature
              title="Automatic updates"
              description="With so many different and ever-changing laws it can be hard to keep up to date with the latest legal requirements. Let us do the hard work and notify you of the changes when we know you are running and improving your product and business."
            />
            <Feature
              title="Copy or host the documents"
              description="We can host your generated policies for you for free so you don’t need any server-side backend component if you don’t want that. We would like to have full control over your documents and you can easily copy the policies to your site or app as well."
            />
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-2xl font-bold text-center mb-6">
            Privacy Policies with global coverage
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            Almost every country in the world has some kind of privacy law to
            protect their citizen’s personal information. That’s why every
            Privacy Policy we generate is adapted to comply with the major
            privacy laws relevant to you. Just tell us where you operate and
            we’ll customize your Privacy Policy accordingly.
          </p>
          <div className="grid md:grid-cols-3 gap-10 mt-10 text-center">
            <div>
              <h3 className="text-lg font-semibold">CCPA & CalOPPA</h3>
              <p className="text-gray-600">
                CCPA & CalOPPA protect personal data belonging to residents of
                California. If you collect or store information from users in
                the US, we’ll make sure your Privacy Policy complies with CCPA &
                CalOPPA laws.
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
        </section>
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
