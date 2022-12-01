import React from "react";
import Particles from "react-tsparticles";
import "./AlertWindow.css";


const AlertWindow = () => {
    
    return (
        
        <div className="alertWindow">
             <Particles
        options={{
          background: {
            color: "#181A18"
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              resize: true
            }
          },
          particles: {
            color: {
              value: "#ffffff"
            },
            number: {
              density: {
                enable: true,
                area: 1000
              },
              limit: 0,
              value: 300
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.05,
                speed: 1,
                sync: false
              },
              random: {
                enable: true,
                minimumValue: 0.05
              },
              value: 1
            },
            shape: {
              type: "star"
            },
            size: {
              randmon: {
                enable: true,
                minimumValue: 0.5,
                value: 1
              }
            }
          }
        }}
      />
                <div className="alertBox">
                    <p className="alertTulisan">Maaf, saat ini hanya kompatibel untuk browser dekstop</p>
                </div>
        </div>   
    );
}
export default AlertWindow;