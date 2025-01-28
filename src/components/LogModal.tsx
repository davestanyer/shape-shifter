import React from 'react';
import { X, Calculator } from 'lucide-react';
import { estimateCalories } from '../lib/openai';

interface LogModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  title: string;
  children: React.ReactNode;
}

export function LogModal({ isOpen, onClose, onSubmit, title, children }: LogModalProps) {
  const [isEstimating, setIsEstimating] = React.useState(false);
  const formRef = React.useRef<HTMLFormElement>(null);

  const handleEstimateCalories = async () => {
    if (!formRef.current) return;

    const description = formRef.current.description?.value;
    if (!description) {
      alert('Please enter a meal description first');
      return;
    }

    setIsEstimating(true);
    try {
      const calories = await estimateCalories(description);
      
      // Update the calories input if it exists
      const caloriesInput = formRef.current.calories as HTMLInputElement;
      if (caloriesInput) {
        caloriesInput.value = calories.toString();
      }
    } catch (error) {
      console.error('Failed to estimate calories:', error);
      alert('Failed to estimate calories. Please try again or enter manually.');
    } finally {
      setIsEstimating(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>
        <form
          ref={formRef}
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(Object.fromEntries(new FormData(e.currentTarget)));
          }}
        >
          {children}

          {/* Add Calculate Calories button if the form has description and calories fields */}
          {formRef.current?.description && formRef.current?.calories && (
            <div className="mt-4 mb-2">
              <button
                type="button"
                onClick={handleEstimateCalories}
                disabled={isEstimating}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors disabled:opacity-50"
              >
                <Calculator className="w-4 h-4" />
                {isEstimating ? 'Calculating...' : 'Calculate Calories'}
              </button>
            </div>
          )}

          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}