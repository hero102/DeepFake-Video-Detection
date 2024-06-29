import React, { useState } from 'react';
import axios from 'axios';

const VideoUpload = ({ setResult }) => {
  const [videoFile, setVideoFile] = useState(null);

  const handleFileChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('video', videoFile);

    try {
      const response = await axios.post('/Detect', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setResult(response.data);
    } catch (error) {
      console.error('Error uploading the video:', error);
    }
  };

  return (
    <div className="video-upload-container">
      <h2>Fake Video Detector</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="video">Upload Video</label>
          <input type="file" id="video" name="video" accept="video/*" onChange={handleFileChange} required />
        </div>
        <div className="form-group">
          <button type="submit">Detect</button>
        </div>
      </form>
    </div>
  );
};

export default VideoUpload;
