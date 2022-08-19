import style from './style.module.css'
import {formatCurrentMonth} from '../../helpers/dateFilter'
import { ResumeItem } from '../ResumeItem';
type Props = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number;
}

export const InfoArea = ({currentMonth, onMonthChange, income, expense}: Props) => {

    const handlePreviousMonth = () =>{
        let [year, month] = currentMonth.split('-')
        let currentDate = new Date(parseInt(year), parseInt(month)-1, 1)
        currentDate.setMonth(currentDate.getMonth()-1)
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()+1}`)
    }

    const handleNextMonth = () => {
        let [year, month] = currentMonth.split('-')
        let currentDate = new Date(parseInt(year), parseInt(month)-1, 1)
        currentDate.setMonth(currentDate.getMonth()+1)
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()+1}`)
    }

    return(
        <div className={style.infoContainer}>
            <div className={style.infoMonth}>
                <div className={style.infoArrow} onClick={handlePreviousMonth}>⬅</div>
                <div className={style.infoTitle}>{formatCurrentMonth(currentMonth)}</div>
                <div className={style.infoArrow} onClick={handleNextMonth}>➡</div>
            </div>
            <div className={style.infoResume}>
                <ResumeItem title='Receitas' value={income}/>
                <ResumeItem title='Despesas' value={expense}/>
                <ResumeItem title='Balanço' value={income-expense}/>

            </div>
        </div>
    );
}