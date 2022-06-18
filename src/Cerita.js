import Home from './Home';
import ListCerita from './ListCerita';
import useFetch from './UseFetch';

const Cerita = () => {
    const {cerita, isLoading, error} = useFetch('http://localhost:3011/');
  
    return (
            <div className="cerita">
                { error && <div>{ error }</div> }
                { isLoading && <div>Loading...</div> }
                {cerita && <Home cerita={cerita} title="Daftar Dongeng"/>}
            </div>
      );
}
 
export default Cerita;