import React from 'react';
import { Clock, MapPin, Phone, Star, CheckCircle, AlertCircle, Shield, Smile } from 'lucide-react';
import Link from 'next/link';

const CosmeticDentistryPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50">
      {/* Hero Section */}
      <div className=" py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              ✨ Cosmetic Dentistry Services 
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your smile with our aesthetic treatments - teeth whitening, veneers, bonding, and more to create your perfect smile
            </p>
          </div>
          
          {/* Doctor Info Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto" style={{backgroundColor: '#BCF7F1'}}>
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                👩‍⚕️ Dr. Nikita Sharma
              </h2>
              <p className="text-lg text-gray-700 font-medium">
                B.D.S., M.D.S., PEDODONTIST, COSMETIC DENTISTRY SPECIALIST
              </p>
              <div className="flex justify-center mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>

            {/* Schedule */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-3">
                  <Clock className="w-6 h-6 text-teal-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">🌅 Morning Session</h3>
                </div>
                <div className="flex items-center mb-2">
                  <MapPin className="w-5 h-5 text-gray-500 mr-2" />
                  <span className="text-gray-700 font-medium">Paras Urology Hospital</span>
                </div>
                <div className="text-teal-700 font-bold text-lg">10:00 AM - 12:00 PM</div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-3">
                  <Clock className="w-6 h-6 text-teal-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">🌆 Evening Session</h3>
                </div>
                <div className="flex items-center mb-2">
                  <MapPin className="w-5 h-5 text-gray-500 mr-2" />
                  <span className="text-gray-700 font-medium">Nivik Smile Care</span>
                </div>
                <div className="text-teal-700 font-bold text-lg">5:00 PM - 7:00 PM</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        
        {/* What is Cosmetic Dentistry */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <Smile className="w-8 h-8 text-teal-600 mr-3" />
              ✨ What is Cosmetic Dentistry?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Cosmetic dentistry focuses on enhancing the appearance of your smile through various aesthetic treatments. 
              Unlike general dentistry which addresses oral health and function, cosmetic procedures aim to improve the 
              color, position, shape, size, and alignment of your teeth for a more attractive smile. 💎
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our cosmetic treatments combine artistry with dental science to create natural-looking, beautiful results 
              that can dramatically boost your confidence and self-esteem. Whether you want subtle improvements or a 
              complete smile makeover, we have solutions to meet your goals. 🎨
            </p>
          </div>
        </section>

        {/* Services Offered */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            💎 Our Cosmetic Dentistry Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🦷", title: "Teeth Whitening", desc: "Professional-grade bleaching for a brighter smile" },
              { icon: "🔲", title: "Porcelain Veneers", desc: "Thin shells that cover the front of teeth" },
              { icon: "🦷", title: "Dental Bonding", desc: "Tooth-colored resin to repair chips and gaps" },
              { icon: "🦷", title: "Invisalign", desc: "Clear aligners for discreet teeth straightening" },
              { icon: "👑", title: "Dental Crowns", desc: "Custom caps to restore damaged teeth" },
              { icon: "😁", title: "Smile Makeovers", desc: "Complete transformation of your smile" }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Candidates Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <CheckCircle className="w-8 h-8 text-purple-500 mr-3" />
              🤔 Are You a Candidate for Cosmetic Dentistry?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-2xl mr-3">🦷</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Discolored Teeth</h4>
                    <p className="text-gray-600">Stains from food, drinks, smoking or aging</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-3">😬</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Misaligned Teeth</h4>
                    <p className="text-gray-600">Crooked, gapped, or crowded teeth</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-3">🦷</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Worn Teeth</h4>
                    <p className="text-gray-600">Teeth that are chipped, cracked, or eroded</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-2xl mr-3">😕</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Gummy Smile</h4>
                    <p className="text-gray-600">Excessive gum tissue showing when you smile</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-3">🦷</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Missing Teeth</h4>
                    <p className="text-gray-600">Gaps from extractions or congenital absence</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-3">😊</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Smile Enhancement</h4>
                    <p className="text-gray-600">Wanting to improve your smile's appearance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Treatments */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            💫 Popular Cosmetic Treatments
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">✨</div>
                <h3 className="text-2xl font-bold text-gray-800">Teeth Whitening</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Professional teeth whitening can brighten your smile by several shades in just one visit. 
                We use safe, effective bleaching agents that provide better results than store-bought kits.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>In-office treatment takes about 1 hour</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Custom take-home kits also available</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Results last 6 months to 2 years</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">🔲</div>
                <h3 className="text-2xl font-bold text-gray-800">Porcelain Veneers</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Veneers are thin, custom-made shells that cover the front surface of teeth to improve 
                their appearance. They can transform the color, shape, size, or length of your teeth.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Correct multiple cosmetic issues at once</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Natural-looking, stain-resistant material</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Last 10-15 years with proper care</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Treatment Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            🔄 Your Smile Transformation Process
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", icon: "💬", title: "Consultation", desc: "Discuss your smile goals and options" },
              { step: "2", icon: "📝", title: "Treatment Plan", desc: "Customized plan for your smile makeover" },
              { step: "3", icon: "🦷", title: "Preparation", desc: "May include impressions or temporaries" },
              { step: "4", icon: "✨", title: "Final Result", desc: "Enjoy your beautiful new smile with Nivik Care" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg mb-4" style={{backgroundColor: '#BCF7F1'}}>
                  <div className="text-4xl mb-3">{process.icon}</div>
                  <div className="text-2xl font-bold text-teal-600 mb-2">Step {process.step}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{process.title}</h3>
                  <p className="text-gray-600 text-sm">{process.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              ✨ Benefits of Cosmetic Dentistry
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="text-4xl mb-4">😊</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Boost Confidence</h3>
                <p className="text-gray-600">Feel proud to show off your beautiful smile</p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Professional Edge</h3>
                <p className="text-gray-600">A great smile makes a positive first impression</p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Youthful Appearance</h3>
                <p className="text-gray-600">Bright, even teeth can take years off your look</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">🌟 Ready for Your Smile Transformation?</h2>
            <p className="text-xl mb-6">
              Schedule a cosmetic consultation with Dr. Nikita Sharma today and discover how we can enhance your smile! ✨
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/appointment">
                <button className="bg-white text-teal-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                  📞 Book Consultation
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CosmeticDentistryPage;