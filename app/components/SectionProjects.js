'use client';
import { GLOBAL, SIZES } from '../config/constants';

export default function SectionProjects() {
  return (
    <section id="projects" className={`${GLOBAL.sectionPadding} bg-black`}>
      <div className={GLOBAL.container}>
        <div className="text-center mb-12">
          <h2 className={`${SIZES.h2} font-bold`}>My <span className="text-emerald-500">Projects</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-2 rounded-full mb-4"></div>
          <p className="text-3xl text-gray-400 max-w-6xl mx-auto leading-relaxed">
            Here's a selection of my work – from data analytics to machine learning research. Each project reflects a mix of curiosity, technical depth, and real‑world problem solving.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* PROJECT 1 - INCREASED HEIGHT */}
          <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 transition-all duration-300 relative group h-[950px] flex flex-col">
            <div className="relative overflow-hidden flex-shrink-0">
              <img src="/tetris.png" alt="Tetris project" className="w-full h-80 object-cover" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <a href="https://github.com/Enhui-Li/tetris-big-data-analysis" target="_blank" className="bg-emerald-500 hover:bg-emerald-600 text-black rounded-full p-4 transform scale-90 group-hover:scale-100 transition-all duration-200 shadow-lg"><i className="fab fa-github text-xl"></i></a>
              </div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className={`${SIZES.h3} font-bold mb-4`}>Big Data Analysis – Competitive Tetris</h3>
              <p className={`${SIZES.body} text-gray-400 leading-relaxed mb-auto`}>I took part in analyzing competitive Tetris player data using the Apriori algorithm, processed over 10k game records, and helped discover player behavior patterns. Used Python and Weka for data preprocessing and analysis.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="bg-gray-800 text-emerald-300 text-2xl font-bold px-6 py-3 rounded-lg">Python</span>
                <span className="bg-gray-800 text-emerald-300 text-2xl font-bold px-6 py-3 rounded-lg">Weka</span>
                <span className="bg-gray-800 text-emerald-300 text-2xl font-bold px-6 py-3 rounded-lg">Data Mining</span>
              </div>
            </div>
          </div>

          {/* PROJECT 2 - INCREASED HEIGHT */}
          <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 transition-all duration-300 relative group h-[950px] flex flex-col">
            <div className="relative overflow-hidden flex-shrink-0">
              <img src="/petroleum_report.png" alt="ML publication" className="w-full h-80 object-cover" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <a href="https://github.com/Enhui-Li/petroleum-price-forecasting" target="_blank" className="bg-emerald-500 hover:bg-emerald-600 text-black rounded-full p-4 transform scale-90 group-hover:scale-100 transition-all duration-200 shadow-lg"><i className="fab fa-github text-xl"></i></a>
              </div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className={`${SIZES.h3} font-bold mb-4`}>Petroleum Price Forecasting (SEML 2023)</h3>
              <p className={`${SIZES.body} text-gray-400 leading-relaxed mb-auto`}>I collaborated on building regression and random forest models for petroleum price forecasting. Our work was accepted and published at the International Conference on Software Engineering and Machine Learning (CONF-SEML 2023).</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="bg-gray-800 text-emerald-300 text-2xl font-bold px-6 py-3 rounded-lg">Scikit-learn</span>
                <span className="bg-gray-800 text-emerald-300 text-2xl font-bold px-6 py-3 rounded-lg">Pandas</span>
                <span className="bg-gray-800 text-emerald-300 text-2xl font-bold px-6 py-3 rounded-lg">Random Forest</span>
              </div>
            </div>
          </div>

          {/* PROJECT 3 - INCREASED HEIGHT */}
          <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 transition-all duration-300 relative group h-[950px] flex flex-col">
            <div className="relative overflow-hidden flex-shrink-0">
              <img src="/petroleum.png" alt="Car price pipeline" className="w-full h-80 object-cover" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <a href="https://github.com/Enhui-Li/car-price-prediction-pipeline" target="_blank" className="bg-emerald-500 hover:bg-emerald-600 text-black rounded-full p-4 transform scale-90 group-hover:scale-100 transition-all duration-200 shadow-lg"><i className="fab fa-github text-xl"></i></a>
              </div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className={`${SIZES.h3} font-bold mb-4`}>Car Price Prediction Pipeline</h3>
              <p className={`${SIZES.body} text-gray-400 leading-relaxed mb-auto`}>I built an object-oriented Python pipeline for car price prediction as part of an Oxford University-based machine learning course.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="bg-gray-800 text-emerald-300 text-2xl font-bold px-6 py-3 rounded-lg">Python</span>
                <span className="bg-gray-800 text-emerald-300 text-2xl font-bold px-6 py-3 rounded-lg">OOP</span>
                <span className="bg-gray-800 text-emerald-300 text-2xl font-bold px-6 py-3 rounded-lg">Linear Regression</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}