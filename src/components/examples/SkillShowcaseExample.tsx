// Example: How to use ColorPicker and SkillTag components together
import React, { useState } from 'react';
import { ColorPicker } from '../ui/ColorPicker';
import { SkillTag } from '../ui/SkillTag';

const SkillShowcaseExample = () => {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [pickerPosition, setPickerPosition] = useState({ x: 0, y: 0 });

  // Skill colors state
  const [skillColors, setSkillColors] = useState({
    'React': '#61dafb',
    'TypeScript': '#3178c6',
    'Node.js': '#68d391',
    'Python': '#3776ab',
    'Docker': '#2496ed',
  });

  // Handle skill tag click
  const handleSkillClick = (skill: string, event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPickerPosition({
      x: rect.left + rect.width / 2,
      y: rect.bottom + 10
    });
    setSelectedSkill(skill);
    setShowColorPicker(true);
  };

  // Handle color change
  const handleColorChange = (color: string) => {
    if (selectedSkill) {
      setSkillColors(prev => ({
        ...prev,
        [selectedSkill]: color
      }));
    }
  };

  // Handle color picker close
  const handleColorPickerClose = () => {
    setShowColorPicker(false);
    setSelectedSkill(null);
  };

  return (
    <div className="p-8 space-y-4">
      <h2 className="text-2xl font-bold mb-4">My Technical Skills</h2>
      
      <p className="text-gray-700">
        I'm proficient in <SkillTag
          skill="React"
          color={skillColors['React']}
          onClick={handleSkillClick}
        /> and <SkillTag
          skill="TypeScript"
          color={skillColors['TypeScript']}
          onClick={handleSkillClick}
        /> for frontend development, <SkillTag
          skill="Node.js"
          color={skillColors['Node.js']}
          onClick={handleSkillClick}
        /> and <SkillTag
          skill="Python"
          color={skillColors['Python']}
          onClick={handleSkillClick}
        /> for backend services, and <SkillTag
          skill="Docker"
          color={skillColors['Docker']}
          onClick={handleSkillClick}
        /> for containerization.
      </p>

      <p className="text-sm text-gray-500">
        Click on any skill tag to change its color!
      </p>

      {/* Color Picker */}
      <ColorPicker
        isVisible={showColorPicker}
        position={pickerPosition}
        onColorChange={handleColorChange}
        onClose={handleColorPickerClose}
        title={`Choose color for ${selectedSkill}`}
      />
    </div>
  );
};

export default SkillShowcaseExample;
