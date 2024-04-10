import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function Loading() {
  return (
    <div className="Loader">
      <Loader
        type="Oval"
        timeout={3000}
        className="Loader loader-oval"
        color="grey"
        height="100"
        width="100"
      />
    </div>
  );
}
