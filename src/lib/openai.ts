import { supabase } from './supabase';

const SYSTEM_PROMPT = `You are a nutrition expert. Your task is to estimate the calories in meals based on their descriptions.
Provide only the numeric calorie estimate. Consider portion sizes if mentioned.
If the description is too vague, provide a reasonable estimate for a typical serving.
Base your estimates on average adult portions.`;

export async function estimateCalories(description: string): Promise<number> {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) throw new Error('Not authenticated');

    const response = await fetch('/api/estimate-calories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session.access_token}`
      },
      body: JSON.stringify({ description })
    });

    if (!response.ok) {
      throw new Error('Failed to estimate calories');
    }

    const data = await response.json();
    const calories = parseInt(data.calories);
    return isNaN(calories) ? 0 : calories;
  } catch (error) {
    console.error('Error estimating calories:', error);
    throw error;
  }
}