import './app-info.css'

const AppInfo = ({employeesAmount, employeesIncreaseAmount}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников</h1>
            <h2>Общее число сотрудников: {employeesAmount}</h2>
            <h2>Премию получат: {employeesIncreaseAmount}</h2>
        </div>
    )
}

export default AppInfo