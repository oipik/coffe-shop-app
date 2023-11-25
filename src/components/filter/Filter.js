
import './filter.scss';

const Filter = ({onFilterSelect}) => {

    const buttonsData = [
        { name: 'All', label: 'All' },
        { name: 'Brazil', label: 'Brazil' },
        { name: 'Kenya', label: 'Kenya' },
        { name: 'Columbia', label: 'Columbia' },
    ];

    const buttons = buttonsData.map(({ name, label }) => {
        return (
            <button
                type='button'
                className="filter__btn"
                key={name}
                onClick={() => onFilterSelect(name)}>
                {label}
            </button>
        )
    })

    return (
        <div className="filter">
            <span className="filter__text"> Or filter </span>
            <div className="filter__box">
                {buttons}
            </div>
        </div>
    )
}

export default Filter;