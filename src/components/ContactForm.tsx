import { motion } from 'motion/react';
import { useState } from 'react';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ValidationState {
  name: { isValid: boolean; message: string };
  email: { isValid: boolean; message: string };
  message: { isValid: boolean; message: string };
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationState, setValidationState] = useState<ValidationState>({
    name: { isValid: false, message: '' },
    email: { isValid: false, message: '' },
    message: { isValid: false, message: '' }
  });
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Validation functions
  const validateField = (field: string, value: string) => {
    switch (field) {
      case 'name':
        const nameValid = value.length >= 2;
        setValidationState(prev => ({
          ...prev,
          name: {
            isValid: nameValid,
            message: nameValid ? 'Valid name format' : 'Name must be at least 2 characters'
          }
        }));
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailValid = emailRegex.test(value);
        setValidationState(prev => ({
          ...prev,
          email: {
            isValid: emailValid,
            message: emailValid ? 'Valid email format' : 'Invalid email format'
          }
        }));
        break;
      case 'message':
        const messageValid = value.length >= 10;
        setValidationState(prev => ({
          ...prev,
          message: {
            isValid: messageValid,
            message: messageValid ? 'Message length sufficient' : 'Message must be at least 10 characters'
          }
        }));
        break;
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    validateField(field, value);
    setSubmissionStatus('idle');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate all fields
    validateField('name', formData.name);
    validateField('email', formData.email);
    validateField('message', formData.message);
    
    // Check if all fields are valid
    const allValid = validationState.name.isValid && 
                    validationState.email.isValid && 
                    validationState.message.isValid;
    
    if (!allValid) {
      setSubmissionStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'The GOAT',
        },
        import.meta.env.VITE_PUBLIC_KEY,
      );

      console.log('Email sent successfully:', result.text);
      setSubmissionStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setValidationState({
        name: { isValid: false, message: '' },
        email: { isValid: false, message: '' },
        message: { isValid: false, message: '' }
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmissionStatus('error');
    }
    
    setIsSubmitting(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="glassmorphism rounded-xl p-8 border border-[#00d4ff]/30"
    >
      <h3 className="text-2xl text-white mb-6 font-mono">
        <span className="text-[#00ffff]">{'>'}</span> send_message()
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-mono text-gray-300 mb-2">
            <span className="text-[#8a2be2]">$</span> name
          </label>
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className={`w-full p-4 bg-[#1a1a2e]/50 border rounded-lg text-white font-mono focus:outline-none focus:ring-2 transition-all duration-300 ${
              formData.name && validationState.name.isValid 
                ? 'border-[#00ffff] focus:border-[#00ffff] focus:ring-[#00ffff]/20' 
                : formData.name && !validationState.name.isValid
                ? 'border-[#ff0080] focus:border-[#ff0080] focus:ring-[#ff0080]/20'
                : 'border-[#00d4ff]/30 focus:border-[#00d4ff] focus:ring-[#00d4ff]/20'
            }`}
            placeholder="Enter your name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-mono text-gray-300 mb-2">
            <span className="text-[#8a2be2]">$</span> email
          </label>
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className={`w-full p-4 bg-[#1a1a2e]/50 border rounded-lg text-white font-mono focus:outline-none focus:ring-2 transition-all duration-300 ${
              formData.email && validationState.email.isValid 
                ? 'border-[#00ffff] focus:border-[#00ffff] focus:ring-[#00ffff]/20' 
                : formData.email && !validationState.email.isValid
                ? 'border-[#ff0080] focus:border-[#ff0080] focus:ring-[#ff0080]/20'
                : 'border-[#00d4ff]/30 focus:border-[#00d4ff] focus:ring-[#00d4ff]/20'
            }`}
            placeholder="your.email@domain.com"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-mono text-gray-300 mb-2">
            <span className="text-[#8a2be2]">$</span> message
          </label>
          <motion.textarea
            whileFocus={{ scale: 1.02 }}
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            rows={5}
            className={`w-full p-4 bg-[#1a1a2e]/50 border rounded-lg text-white font-mono focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
              formData.message && validationState.message.isValid 
                ? 'border-[#00ffff] focus:border-[#00ffff] focus:ring-[#00ffff]/20' 
                : formData.message && !validationState.message.isValid
                ? 'border-[#ff0080] focus:border-[#ff0080] focus:ring-[#ff0080]/20'
                : 'border-[#00d4ff]/30 focus:border-[#00d4ff] focus:ring-[#00d4ff]/20'
            }`}
            placeholder="Your message here..."
            required
          />
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full p-4 bg-gradient-to-r from-[#00d4ff] to-[#00ffff] text-black rounded-lg hover:shadow-lg hover:shadow-[#00d4ff]/50 transition-all duration-300 font-mono disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
              />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send size={20} />
              <span>Execute Send</span>
            </>
          )}
        </motion.button>
      </form>

      {/* Interactive Terminal output */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-6 p-4 bg-[#0a0a0f] rounded-lg border border-[#00d4ff]/20"
      >
        <div className="font-mono text-sm space-y-1">
          <div className="text-[#00d4ff]">$ node contactForm.js</div>
          
          {/* Name validation */}
          <div className="text-gray-400">
            Validating name...{' '}
            {formData.name ? (
              validationState.name.isValid ? (
                <span className="text-green-400">✓ {validationState.name.message}</span>
              ) : (
                <span className="text-[#ff0080]">✗ {validationState.name.message}</span>
              )
            ) : (
              <span className="text-gray-500">awaiting input</span>
            )}
          </div>
          
          {/* Email validation */}
          <div className="text-gray-400">
            Validating email...{' '}
            {formData.email ? (
              validationState.email.isValid ? (
                <span className="text-green-400">✓ {validationState.email.message}</span>
              ) : (
                <span className="text-[#ff0080]">✗ {validationState.email.message}</span>
              )
            ) : (
              <span className="text-gray-500">awaiting input</span>
            )}
          </div>
          
          {/* Message validation */}
          <div className="text-gray-400">
            Validating message...{' '}
            {formData.message ? (
              validationState.message.isValid ? (
                <span className="text-green-400">✓ {validationState.message.message}</span>
              ) : (
                <span className="text-[#ff0080]">✗ {validationState.message.message}</span>
              )
            ) : (
              <span className="text-gray-500">awaiting input</span>
            )}
          </div>
          
          {/* Submission status */}
          <div className="text-gray-400 mt-2 pt-2 border-t border-gray-700">
            {isSubmitting ? (
              <div className="text-[#00ffff]">→ Transmitting data...</div>
            ) : submissionStatus === 'success' ? (
              <div className="text-green-400">✓ Message sent successfully!</div>
            ) : submissionStatus === 'error' ? (
              <div className="text-[#ff0080]">✗ Transmission failed. Please try again.</div>
            ) : (
              <div>Status: <span className="text-[#8a2be2]">ready_to_transmit</span></div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
