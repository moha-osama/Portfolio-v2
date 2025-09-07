import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Palette } from 'lucide-react';

/**
 * ColorPicker Component
 * 
 * A reusable VS Code-inspired color picker with predefined color palette and custom color input.
 * Supports keyboard navigation, click-outside-to-close, and smooth animations.
 * 
 * @example
 * ```tsx
 * const [showPicker, setShowPicker] = useState(false);
 * const [position, setPosition] = useState({ x: 0, y: 0 });
 * 
 * const handleClick = (event: React.MouseEvent) => {
 *   const rect = event.currentTarget.getBoundingClientRect();
 *   setPosition({ x: rect.left, y: rect.bottom + 10 });
 *   setShowPicker(true);
 * };
 * 
 * <ColorPicker
 *   isVisible={showPicker}
 *   position={position}
 *   onColorChange={(color) => console.log('Selected color:', color)}
 *   onClose={() => setShowPicker(false)}
 *   title="Choose Color"
 * />
 * ```
 */
interface ColorPickerProps {
  /** Controls visibility of the color picker */
  isVisible: boolean;
  /** Position where the picker should appear (in pixels) */
  position: { x: number; y: number };
  /** Callback fired when a color is selected */
  onColorChange: (color: string) => void;
  /** Callback fired when the picker should close */
  onClose: () => void;
  /** Custom color palette array. If not provided, uses VS Code inspired defaults */
  colorPalette?: string[];
  /** Title text displayed in the picker header */
  title?: string;
}

const defaultColorPalette = [
  '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57',
  '#ff9ff3', '#54a0ff', '#5f27cd', '#00d2d3', '#ff9f43',
  '#c8d6e5', '#ffeaa7', '#fab1a0', '#fd79a8', '#fdcb6e',
  '#e17055', '#74b9ff', '#0984e3', '#a29bfe', '#6c5ce7'
];

export const ColorPicker: React.FC<ColorPickerProps> = ({
  isVisible,
  position,
  onColorChange,
  onClose,
  colorPalette = defaultColorPalette,
  title = 'Choose Color'
}) => {
  const colorPickerRef = useRef<HTMLDivElement>(null);

  // Handle clicking outside color picker
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (colorPickerRef.current && !colorPickerRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isVisible, onClose]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isVisible) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isVisible, onClose]);

  const handleColorSelect = (color: string) => {
    onColorChange(color);
    onClose();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={colorPickerRef}
          initial={{ opacity: 0, scale: 0.8, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -10 }}
          transition={{ duration: 0.2 }}
          className="fixed z-50 bg-gray-900 border border-gray-700 rounded-lg p-4 shadow-2xl"
          style={{
            left: `${position.x - 120}px`,
            top: `${position.y}px`,
          }}
        >
          {/* Header */}
          <div className="flex items-center gap-2 mb-3">
            <Palette size={16} className="text-gray-400" />
            <span className="text-sm text-gray-400 font-mono">{title}</span>
          </div>

          {/* Color Grid */}
          <div className="grid grid-cols-5 gap-2">
            {colorPalette.map((color, index) => (
              <button
                key={index}
                className="w-8 h-8 rounded border-2 border-transparent hover:border-white transition-all duration-200 hover:scale-110 focus:outline-none focus:border-white"
                style={{ backgroundColor: color }}
                onClick={() => handleColorSelect(color)}
                title={color}
                aria-label={`Select color ${color}`}
              />
            ))}
          </div>

          {/* Custom Color Input */}
          <div className="mt-3 pt-2 border-t border-gray-700">
            <input
              type="color"
              className="w-full h-8 rounded cursor-pointer border-0 bg-transparent"
              onChange={(e) => handleColorSelect(e.target.value)}
              title="Custom color picker"
              aria-label="Custom color picker"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ColorPicker;
