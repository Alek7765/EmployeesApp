import './app-info.scss';

const AppInfo = ({increased, employees}) => {

    return (
        <div className="app-info">
            <h1>Учет сотрудников компании</h1>
            <h2>Количество сотрудников: {employees}</h2>
            <h2>Премию получат: {increased}</h2>
        </div>
    )
}

export default AppInfo;