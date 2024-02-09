import React from 'react';

const Loader = () => {
  return (
    <>
      <style>{`
        .overlay {
          height: 100vh;
          width: 100%;
          background-color: #00000054;
          z-index: 50;
          display: flex;
          justify-content: center;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
        }

        .loader {
          width: 48px;
          height: 48px;
          border: 5px solid #e52424;
          border-bottom-color: transparent;
          border-radius: 50%;
          display: inline-block;
          box-sizing: border-box;
          animation: rotation 1s linear infinite;
        }

        @keyframes rotation {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>

      <div className="overlay">
        <span className="loader"></span>
      </div>
    </>
  );
};

export default Loader;
