import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Layout from './components/Layout';
import { ThemeProvider } from './context/ThemeProvider';
import CityPage from './pages/CityPage';
import WeatherDashboard from './pages/WeatherDashboard';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const App = () => {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
        staleTime: 1000 * 60 * 5, // 5 minutes
        gcTime: 1000 * 60 * 10, // 10 minutes
      },
    },
  })
  return (

    
     <QueryClientProvider  client={queryClient}>
    <BrowserRouter>
  
      <ThemeProvider defaultTheme='dark'>
      <Layout>
      <Routes>
        <Route path='/' element={<WeatherDashboard/>}/>
        <Route path='/city/:cityName' element={<CityPage/>}/>
      </Routes>
      </Layout>
      </ThemeProvider>
    </BrowserRouter>

    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;