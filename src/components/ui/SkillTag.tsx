import React from 'react';

/**
 * SkillTag Component
 * 
 * A reusable component for displaying clickable skill tags with customizable colors,
 * hover effects, and click handlers. Perfect for highlighting technical skills,
 * technologies, or any clickable tags with visual feedback.
 * 
 * @example
 * ```tsx
 * <SkillTag
 *   skill="React"
 *   color="#4ecdc4"
 *   onClick={(skill, event) => {
 *     console.log('Clicked skill:', skill);
 *     // Show color picker or perform action
 *   }}
 * />
 * ```
 */
interface SkillTagProps {
  /** The skill/technology name to display */
  skill: string;
  /** The color for the skill tag (hex, rgb, hsl, etc.) */
  color: string;
  /** Callback fired when the skill tag is clicked */
  onClick: (skill: string, event: React.MouseEvent) => void;
  /** Additional CSS classes to apply */
  className?: string;
  /** Custom background opacity (0-100). Default is 20 */
  backgroundOpacity?: number;
  /** Disable hover effects */
  disableHover?: boolean;
  /** Disable click functionality */
  disabled?: boolean;
}

export const SkillTag: React.FC<SkillTagProps> = ({
  skill,
  color,
  onClick,
  className = '',
  backgroundOpacity = 20,
  disableHover = false,
  disabled = false
}) => {
  const handleClick = (event: React.MouseEvent) => {
    if (!disabled) {
      onClick(skill, event);
    }
  };

  return (
    <span
      className={`
        px-1 rounded font-mono transition-all duration-200
        ${!disabled ? 'cursor-pointer' : 'cursor-default'}
        ${!disableHover && !disabled ? 'hover:scale-105' : ''}
        ${className}
      `}
      style={{
        color: color,
        backgroundColor: `${color}${backgroundOpacity.toString(16).padStart(2, '0')}`,
      }}
      onClick={handleClick}
      role={disabled ? undefined : 'button'}
      tabIndex={disabled ? undefined : 0}
      aria-label={disabled ? undefined : `Click to change color of ${skill}`}
      onKeyDown={(e) => {
        if (!disabled && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          handleClick(e as unknown as React.MouseEvent);
        }
      }}
    >
      {skill}
    </span>
  );
};

export default SkillTag;
