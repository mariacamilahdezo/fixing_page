import Fp_image from '../assets/Fp_image.jpeg'
import logo from '../assets/Logo_FP_1.png'
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-fp-logo" />
                <p >
                    No te preocupes en unos minutos podrás usar nuevamente todas las funcionalidades.
                </p>

            </header>
            <main>
                <img src={Fp_image} className="App-logo" alt="logo" />
                <p className="App-text">
                    ¡Estamos mejorando para ti!
                </p>
            </main>
        </div>
    );
}

export default App;
