# Shape Shifter - Fitness & Nutrition Tracking App

Shape Shifter is a comprehensive fitness and nutrition tracking application built with React, TypeScript, and Supabase. It helps users track their weight, monitor calorie intake, and maintain a food library for consistent nutrition logging.

## Features

- 📊 Weight tracking with visual charts and trends
- 🍎 Daily meal logging with calorie estimation
- 📚 Personal food library for quick meal logging
- 🎯 BMI calculation and weight goals
- ⚡ Real-time data synchronization
- 🌍 New Zealand timezone support
- 📱 Mobile-responsive design
- 🔐 Secure authentication

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **State Management**: React Context
- **UI Components**: Custom components with Lucide icons
- **Charts**: Custom SVG-based charts
- **API Integration**: OpenAI for calorie estimation

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── components/        # React components
├── contexts/         # Context providers
├── lib/             # Utility functions and API clients
├── types/           # TypeScript type definitions
└── App.tsx          # Main application component
```

## Future Enhancements

1. **Exercise Tracking**
   - Workout logging
   - Exercise library
   - Calorie burn estimation
   - Integration with fitness devices

2. **Social Features**
   - Progress sharing
   - Community challenges
   - Friend system
   - Achievement badges

3. **Advanced Analytics**
   - Body measurements tracking
   - Progress photos
   - Trend analysis
   - Custom reports
   - Export functionality

4. **Meal Planning**
   - Meal plan creation
   - Recipe database
   - Grocery lists
   - Nutritional goals

5. **AI Enhancements**
   - Personalized workout recommendations
   - Diet suggestions based on goals
   - Progress predictions
   - Image recognition for food logging

6. **Health Integrations**
   - Apple Health/Google Fit sync
   - Smart scale connectivity
   - Sleep tracking
   - Heart rate monitoring

7. **Premium Features**
   - Custom meal plans
   - Professional nutrition advice
   - Advanced analytics
   - API access

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the GitHub repository or contact the development team.

## Acknowledgments

- Icons by [Lucide](https://lucide.dev)
- Built with [Vite](https://vitejs.dev)
- Powered by [Supabase](https://supabase.com)