
const Card = ({ item }) => {
    const { name, description } = item;

    return (
        <div className="w-74 h-60 bg-base-100 shadow">
            <div className="card-body">
                <h2 className="text-lg font-semibold uppercase">{name}</h2>
                <p className="text-sm h-28">{description}</p>
                <button className="btn btn-sm btn-neutral"> Select</button>
            </div>
        </div>

    );
};

export default Card;