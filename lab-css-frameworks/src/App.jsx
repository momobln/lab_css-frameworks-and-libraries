import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-indigo-600">MyApp</div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Features</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
            <Button variant="contained" size="small">Login</Button>
          </div>

          <div className="md:hidden">
            <IconButton aria-label="open menu">
              <MenuIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function App() {
  return <Navbar />;
}
