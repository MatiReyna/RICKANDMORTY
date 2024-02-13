import Card from './Card';

const Cards = ({ characters }) => {
    return (
        <div>
            {
                characters.map((carta) => {
                    return <Card
                        key={carta.id}
                        name={carta.name}
                        status={carta.status}
                        species={carta.species}
                        gender={carta.gender}
                        origin={carta.origin.name}
                        image={carta.image}
                        onClose={() => window.alert('Emulamos que se cierra la card')}
                    />
                })
            }
        </div>
    )
};

export default Cards;