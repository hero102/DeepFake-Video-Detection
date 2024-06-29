import React, { useState } from 'react';
import axios from 'axios';
import './FeaturedSection.css';
import faceImage from '../images/face.gif';
import firststbox from '../images/businesswoman-using-tablet-analysis.jpg';

const FeaturedSection = ({ setResult, result }) => {
  const [videoFile, setVideoFile] = useState(null);
  const [loading, setLoading] = useState(false); 
  const [fileName, setFileName] = useState(''); 
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setVideoFile(file);
    setFileName(file.name); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('video', videoFile);

    setLoading(true); 

    try {
      const response = await axios.post('/Detect', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setResult(response.data);
    } catch (error) {
      console.error('Error uploading the video:', error);
    } finally {
      setLoading(false); 
    }
  };
  return (
    <section className="featured-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-12 mb-5">
            <div className="custom-block custom-block-overlay">
              <div className="d-flex flex-column h-100">
                <img src={firststbox} className="custom-block-image img-fluid" alt="" />
                {loading ? (
                  <div className="loading-container">
                  <div className="Image">
                  <img src={faceImage} className="custom-block-image img-fluid face-image" alt="Facial Recognition" />
                  </div>
                  </div>
                ) : (
                  <>
            <form onSubmit={handleSubmit}>
                <div className="custom-block-overlay-text d-flex flex-column align-items-center">
                  <input type="file" id="upload-button"  name="video" accept="video/*" onChange={handleFileChange} required />
                  <label htmlFor="upload-button">
                    <i className="fa-solid fa-upload"></i>&nbsp; Choose Or Drop Videos
                  </label>
                        <button type="submit" className="detect-button">Detect</button>
                  <div>
                  </div>
                </div>
              </form>
              {fileName && (
                      <div className="file-name-box">
                        Uploaded File: {fileName}
                      </div>
                    )}
                  </>
                )}
                <div className="section-overlay"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12 mb-5 justify-content-center">
            <div className={`custom-block result-box ${loading ? 'loading-result' : result && result.output === 'FAKE' ? 'fake-result' : 'true-result'}`}>
              <h4>Result:</h4>
              {loading && (
                <div className="lodder">
                  <div className="loading-container">
                    <div className="loading"></div>
                    <div id="loading-text">Loading...</div>
                  </div>
                </div>
              )}
              {result && !loading && (
                <div>
                  <p>Output: {result.output}</p>
                  <p>Confidence: {result.confidence}%</p>
                
                  <div className={`emoji ${result.output === 'FAKE' ? 'sad-animation' : 'happy-animation'}`}>
                    {result.output === 'FAKE' ? '😢' : '😊'}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedSection;