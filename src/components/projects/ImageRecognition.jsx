import React, { useEffect, useRef } from 'react';
import '../../styles/ImageRecognition.css';

const ImageRecognition = () => {
  const canvasContainerRef = useRef(null);

  useEffect(() => {
    const loadRequiredLibraries = async () => {
      if (!window.p5) {
        await loadScript('https://cdn.jsdelivr.net/npm/p5@1.4.1/lib/p5.min.js', 'p5-script');
      }
      
      if (!window.ml5) {
        await loadScript('https://unpkg.com/ml5@0.6.0/dist/ml5.min.js', 'ml5-script');
      }
      
      if (window.p5 && window.ml5) {
        initSketch();
      }
    };

    const loadScript = (src, id) => {
      return new Promise((resolve, reject) => {
        if (document.getElementById(id)) {
          resolve();
          return;
        }
        
        const script = document.createElement('script');
        script.id = id;
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    loadRequiredLibraries();

    return () => {
      if (window.myP5Instance) {
        window.myP5Instance.remove();
        window.myP5Instance = null;
      }
    };
  }, []);

  const initSketch = () => {
    window.myP5Instance = new window.p5((p) => {
      let canvas;
      let clearButton;
      let doodleClassifier;
      let resultsDiv;

      p.setup = function() {
        canvas = p.createCanvas(400, 400);
        canvas.parent(canvasContainerRef.current);
        clearButton = p.createButton('Clear Canvas');
        clearButton.mousePressed(clearCanvas);
        clearButton.class('clear-button');
        p.background(255);
        doodleClassifier = window.ml5.imageClassifier('DoodleNet', modelReady);
        resultsDiv = p.createDiv('Model loading');
        resultsDiv.class('results-container');
        resultsDiv.parent(canvasContainerRef.current);
      };

      function modelReady() {
        console.log('Model loaded');
        doodleClassifier.classify(canvas, gotResults);
      }

      function gotResults(error, results) {
        if (error) {
          console.error(error);
          return;
        }
        let content = `${results[0].label} ${p.nf(100 * results[0].confidence, 2, 1)}%<br/>
                      ${results[1].label} ${p.nf(100 * results[1].confidence, 2, 1)}%`;
        resultsDiv.html(content);
        doodleClassifier.classify(canvas, gotResults);
      }

      function clearCanvas() {
        p.background(255);
      }

      p.draw = function() {
        if (p.mouseIsPressed) {
          p.strokeWeight(16);
          p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
        }
      };
    }, canvasContainerRef.current);
  };

  return (
    <div className="image-recognition">
      <div ref={canvasContainerRef} className="canvas-container"></div>
    </div>
  );
};

export default ImageRecognition;