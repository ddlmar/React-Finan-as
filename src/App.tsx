import style from './global/styles.module.css'
import { categories } from './data/categories'
import {items} from './data/items'
import {Category} from './types/Category'
import {Item} from './types/Item'
import { useEffect, useState } from 'react'
import {filterListByMonth, getCurrentMonth} from './helpers/dateFilter'
import {TableArea} from './components/TableArea'
import { InfoArea } from './components/InfoArea'
function App() {
 
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income,setIncome] = useState(0)
  const [expense, setExpense] = useState(0)

  useEffect(()=>{
    setFilteredList(filterListByMonth(list, currentMonth))
  },[list, currentMonth])

  useEffect(()=>{
    let incomeCount = 0
    let incomeExp = 0
    for(let i in filteredList){
      if(categories[filteredList[i].category].expense){
        incomeExp += filteredList[i].value
      }
      else {
        incomeCount += filteredList[i].value
      }
    }
    setIncome(incomeCount)
    setExpense(incomeExp)

  },[filteredList])

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth)
  }

  return (
    <div className={style.reset}>
      <header className={style.Header}>
        <h1 className={style.HeaderText}>
          Sistema Financeiro
          </h1>
      </header>
      <main className={style.Main}>
        <InfoArea 
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />
        <TableArea list={filteredList}/>
      </main>
    </div>
  )
}

export default App
