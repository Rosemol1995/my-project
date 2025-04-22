import React from 'react';

// export default function About() {
//   return (
//     <div className="min-h-screen bg-slate-50 text-gray-800 px-6 py-12">
//       <div className="max-w-5xl mx-auto">
//         {/* Header */}
//         <h1 className="text-4xl font-bold text-amber-600 mb-4">About Us</h1>
//         <p className="text-lg text-gray-600 mb-10 max-w-3xl">
//           Welcome to <span className="font-semibold text-amber-500">AmberPlate</span>, your smart solution to restaurant management.
//           Our platform is designed to simplify your workflow, improve your customer experience, and make running a restaurant smoother than ever.
//         </p>

//         {/* Info Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Mission */}
//           <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
//             <h2 className="text-2xl font-semibold text-amber-600 mb-2">Our Mission</h2>
//             <p className="text-gray-600 leading-relaxed">
//               To empower restaurant owners with modern tools that make daily operations seamless,
//               from order management to real-time analytics and staff coordination.
//             </p>
//           </div>

//           {/* Vision */}
//           <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
//             <h2 className="text-2xl font-semibold text-amber-600 mb-2">Our Vision</h2>
//             <p className="text-gray-600 leading-relaxed">
//               To become the leading platform that revolutionizes how restaurants operate,
//               combining innovation with simplicity and beautiful user experiences.
//             </p>
//           </div>

//           {/* Values */}
//           <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition md:col-span-2">
//             <h2 className="text-2xl font-semibold text-amber-600 mb-2">Our Values</h2>
//             <ul className="list-disc list-inside text-gray-600 space-y-2">
//               <li>Innovation through simplicity</li>
//               <li>Customer-first development</li>
//               <li>Reliable and responsive tools</li>
//               <li>Beautiful, modern design</li>
//             </ul>
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="mt-12 text-center">
//           <h3 className="text-2xl font-bold text-amber-600 mb-4">Ready to transform your restaurant?</h3>
//           <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition duration-200">
//             Get Started
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import { Lightbulb, Target, HeartHandshake } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white text-gray-800 px-6 py-12">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Hero Section */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-amber-600 mb-4">About AmberPlate</h1>
            <p className="text-lg text-gray-600 mb-6">
              AmberPlate is a modern, all-in-one restaurant management platform designed to streamline daily operations,
              improve customer experiences, and empower your team.
            </p>
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-2xl transition hover:translate-y-0.5 duration-300">
              Start Managing
            </button>
          </div>
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1606836576983-8b458e75221d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Restaurant" className="rounded-3xl shadow-lg" />
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition">
            <Lightbulb className="w-10 h-10 text-amber-500 mx-auto mb-3" />
            <h2 className="text-xl font-semibold text-amber-600 mb-2">Our Mission</h2>
            <p className="text-gray-600 text-sm">
              Deliver smart, simple solutions to help restaurants thrive in the digital age.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition">
            <Target className="w-10 h-10 text-amber-500 mx-auto mb-3" />
            <h2 className="text-xl font-semibold text-amber-600 mb-2">Our Vision</h2>
            <p className="text-gray-600 text-sm">
              To redefine how restaurant operations are managed — with efficiency, beauty, and data.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition">
            <HeartHandshake className="w-10 h-10 text-amber-500 mx-auto mb-3" />
            <h2 className="text-xl font-semibold text-amber-600 mb-2">Our Values</h2>
            <p className="text-gray-600 text-sm">
              We value innovation, reliability, and creating delightful experiences for both staff and customers.
            </p>
          </div>
        </div>

        {/* Image Banner */}
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1613274554329-70f997f5789f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Team in restaurant"
            className="w-full h-[600px] object-cover"
          />
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-amber-600 mb-4">Let’s simplify your restaurant operations</h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Whether you're running a single cafe or a chain of fine-dining restaurants, AmberPlate has the tools to help you grow.
          </p>
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full font-semibold shadow-md transition hover:shadow-2xl hover:translate-y-0.5 duration-300">
            Request a Demo
          </button>
        </div>

      </div>
    </div>
  );
}

