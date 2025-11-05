import { useTheme } from './ThemeProvider';
import { ThemeToggleSwitch } from './ui/theme-toggle';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  const isDark = theme === 'dark';
  
  const handleToggle = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return <ThemeToggleSwitch isDark={isDark} onToggle={handleToggle} />;
}