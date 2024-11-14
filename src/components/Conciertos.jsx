import { Header } from "./Header"
import { Footer } from "./Footer";
import { EventsList } from "./EventsList";
import { EventsListPast } from "./EventsListPast";
import './conciertos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Conciertos() {
    return (
        <>
            

            <main className="w-100">
                <section>
                    <div className="container p-5">
                        <h1 className="text-center">Próximos eventos</h1>
                    </div>
                    <div className="container bg-dark p-2 rounded">
                        <EventsList />
                    </div>
                </section>
                <section>
                    <div className="container p-5 text-center">
                        <FontAwesomeIcon className="p-4 fs-1 fw-light" icon="fa-solid fa-angles-down" />
                        <p className="text-center fs-3 fw-bold">EVENTOS PASADOS</p>
                    </div>
                    <div className="container bg-dark p-2 rounded">
                        <EventsListPast />
                    </div>
                </section>
            </main>
            
        </>


    )
}

export { Conciertos }
