'use client';
import { GLOBAL, SIZES, SOCIALS } from '../config/constants';

export default function SectionContact() {
  return (
    <section id="contact" className={`${GLOBAL.sectionPadding} bg-black`}>
      <div className={GLOBAL.container}>
        <div className="text-center mb-12">
          <h2 className={`${SIZES.h2} font-bold`}>Get In <span className="text-emerald-500">Touch</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-2 rounded-full mb-4"></div>
          <p className="text-3xl text-gray-400 max-w-6xl mx-auto leading-relaxed">
            If you have a suitable opportunity or would like to know more about my experience, I’m very happy to connect and communicate. Thank you for your time!
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-10">
            <div className="flex items-start gap-6">
              <div className="bg-emerald-500/10 p-6 rounded-lg"><i className="fas fa-envelope text-emerald-500 text-4xl"></i></div>
              <div><h4 className="font-bold text-4xl mb-2">Email</h4><p className="text-3xl text-gray-400">enhuili826@gmail.com</p></div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-emerald-500/10 p-6 rounded-lg"><i className="fas fa-phone-alt text-emerald-500 text-4xl"></i></div>
              <div><h4 className="font-bold text-4xl mb-2">Phone</h4><p className="text-3xl text-gray-400">+852 5126 5936</p></div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-emerald-500/10 p-6 rounded-lg"><i className="fas fa-map-marker-alt text-emerald-500 text-4xl"></i></div>
              <div><h4 className="font-bold text-4xl mb-2">Location</h4><p className="text-3xl text-gray-400">Ma On Shan, Hong Kong</p></div>
            </div>
            <div className="flex gap-5 pt-4">
              <a href={SOCIALS.github} target="_blank" className="bg-gray-800 hover:bg-emerald-500/20 p-6 rounded-lg transition"><i className="fab fa-github text-emerald-500 text-5xl"></i></a>
              <a href={SOCIALS.linkedin} target="_blank" className="bg-gray-800 hover:bg-emerald-500/20 p-6 rounded-lg transition"><i className="fab fa-linkedin text-emerald-500 text-5xl"></i></a>
              <a href={SOCIALS.instagram} target="_blank" className="bg-gray-800 hover:bg-emerald-500/20 p-6 rounded-lg transition"><i className="fab fa-instagram text-emerald-500 text-5xl"></i></a>
              <a href={SOCIALS.facebook} target="_blank" className="bg-gray-800 hover:bg-emerald-500/20 p-6 rounded-lg transition"><i className="fab fa-facebook text-emerald-500 text-5xl"></i></a>
            </div>
            <div className="rounded-lg overflow-hidden mt-8">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.439205608908!2d114.17014507556202!3d22.337039141562265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f10!3m3!1m2!1s0x3404073400f3ef35%3A0xeb61704ffb0ba959!2sCity%20University%20of%20Hong%20Kong%20(CityU)!5e0!3m2!1sen!2shk!4v1747827412027!5m2!1sen!2shk" width="90%" height="600" style={{border:0}} allowFullScreen loading="lazy"></iframe>
            </div>
          </div>
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg border border-gray-800 p-10 relative overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-teal-600/20 blur-xl"></div>
            <div className="relative z-10">
              <h3 className={`${SIZES.h3} font-bold mb-8 text-center md:text-left`}>Send Me a Message</h3>
              <form className="space-y-6" onSubmit={(e) => {
                e.preventDefault();
                const name = e.target[0].value.trim();
                const email = e.target[1].value.trim();
                const subject = e.target[2].value.trim();
                const message = e.target[3].value.trim();
                if (!name || !email || !subject || !message) { alert("Please fill all fields"); return; }
                window.open(`mailto:enhuili826@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`)}`, "_blank");
              }}>
                <div><input type="text" placeholder="Your Name" className="w-full bg-gray-800 border-gray-700 rounded-md px-6 py-4 text-white text-3xl focus:outline-none focus:ring-2 focus:ring-emerald-500" /></div>
                <div><input type="email" placeholder="Your Email" className="w-full bg-gray-800 border-gray-700 rounded-md px-6 py-4 text-white text-3xl focus:outline-none focus:ring-2 focus:ring-emerald-500" /></div>
                <div><input type="text" placeholder="Subject" className="w-full bg-gray-800 border-gray-700 rounded-md px-6 py-4 text-white text-3xl focus:outline-none focus:ring-2 focus:ring-emerald-500" /></div>
                <div><textarea rows="6" placeholder="Message" className="w-full bg-gray-800 border-gray-700 rounded-md px-6 py-4 text-white text-3xl focus:outline-none focus:ring-2 focus:ring-emerald-500"></textarea></div>
                <button type="submit" className="w-full bg-emerald-500 text-black font-bold py-4 px-6 rounded-md text-3xl">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}