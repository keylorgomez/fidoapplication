import React, { useState } from 'react';
import AvatarEditor from 'react-avatar-editor';
import './style.css'

const CargarAvatar = ({ onImageChange }) => {
  const [image, setImage] = useState(null);
  const [editor, setEditor] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSave = () => {
    if (editor) {
      const canvas = editor.getImageScaledToCanvas();
      canvas.toBlob((blob) => {
        onImageChange(blob);
      });
    }
  };

  return (
    <div className='AvatarIcon'>
      <input type="file" accept="image/*" className='avatarInput' onChange={handleImageChange} placeholder="aqui imagen" title="imagen aqui"/>
      {image && (
  <AvatarEditor
    ref={(editor) => setEditor(editor)}
    image={image}
    width={120}
    height={120}
    border={50}
    color={[255, 255, 255, 0.5]}
    scale={1}
    rotate={0}
  />
)}

      {image && (
      
        <button onClick={handleSave}>Guardar imagen</button>
      
      )}
    </div>
  );
};

export default CargarAvatar;


