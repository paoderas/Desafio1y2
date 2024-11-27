import React from 'react';
import i1 from '../imagespets/4.png';
import i2 from '../imagespets/2.png';
import i3 from '../imagespets/3.png';
import i4 from '../imagespets/paws2.png';
import i5 from '../imagespets/1.png';
import i6 from '../imagespets/paws2.png';
import i7 from '../imagespets/5.png';

const SectionDos = () => {
  return (
    <section
      id="adopt"
      className="flex flex-col justify-center font-bold text-white items-center px-10 md:px-20 pt-12 h-full font-raleway"
    >
      <h1 className="text-3xl text-black mb-3 md:mb-10">Adopt Now</h1>
      <div className="flex flex-col md:flex-row justify-center items-center pt-4 md:pb-2">
        <div className="flex flex-col md:flex-row justify-center items-center md:justify-between bg-yellow-500 w-full md:w-1/3 p-5 mx-2">
          <div className="md:pl-5 md:pt-5 flex flex-col items-center md:items-start">
            <h1 className="text-xl">Archie and siblings</h1>
            <button className="border text-center border-2 py-2 px-3 mt-3 hover:bg-black hover:bg-opacity-30">
              Adopt now
            </button>
          </div>
          <img
            src={i1}
            className="w-2/3 md:w-1/2 pt-4 md:pt-0"
            alt=""
          />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center md:justify-between bg-purple-500 w-full md:w-1/3 p-5 mx-2">
          <div className="md:pl-5 md:pt-5 flex flex-col items-center md:items-start">
            <h1 className="text-xl">Archie and siblings</h1>
            <button className="border border-2 py-2 px-3 mt-3 hover:bg-black hover:bg-opacity-30">
              Adopt now
            </button>
          </div>
          <img
            src={i2}
            className="w-2/3 md:w-1/2 pt-4 md:pt-0"
            alt=""
          />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center md:justify-between bg-green-500 w-full md:w-1/3 p-5 mx-2">
          <div className="md:pl-5 md:pt-5 flex flex-col items-center md:items-start">
            <h1 className="text-xl">Archie and siblings</h1>
            <button className="border border-2 py-2 px-3 mt-3 hover:bg-black hover:bg-opacity-30">
              Adopt now
            </button>
          </div>
          <img
            src={i3}
            className="w-2/3 md:w-1/2 pt-4 md:pt-0"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center md:pt-2 pb-4">
        <div className="flex flex-col md:flex-row justify-center items-center md:justify-between bg-red-500 w-full md:w-1/2 p-5 mx-2">
          <div className="md:pl-5 md:pt-5 flex flex-col items-center md:items-start">
            <h1 className="text-2xl">Archie and siblings</h1>
            <button className="border border-2 py-2 px-3 mt-3 hover:bg-black hover:bg-opacity-30">
              Adopt now
            </button>
            <img
              src={i4}
              className="w-1/2 pt-4 hidden md:block"
              alt=""
            />
          </div>
          <img
            src={i5}
            className="w-2/2 md:w-1/2 pt-4 md:pt-0"
            alt=""
          />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center md:justify-between bg-indigo-500 w-full md:w-1/2 p-5 mx-2">
          <div className="md:pl-5 md:pt-5 flex flex-col items-center md:items-start">
            <h1 className="text-2xl">Archie and siblings</h1>
            <button className="border border-2 py-2 px-3 mt-3 hover:bg-black hover:bg-opacity-30">
              Adopt now
            </button>
            <img
              src={i6}
              className="w-1/2 pt-4 hidden md:block"
              alt=""
            />
          </div>
          <img
            src={i7}
            className="w-2/2 md:w-1/2 pt-4 md:pt-0"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default SectionDos;
