import style from './styles.module.css'
import {Item} from '../../types/Item'
import { formatDate } from '../../helpers/dateFilter'
import {categories} from '../../data/categories'

type Props = {
    item: Item
}

export const TableItem = ({item}: Props) => {
    const colors = categories[item.category].color
    const expensive = categories[item.category].expense 
    return (
        <tr className={style.TableContainer}>
            <td className={style.TableD}>{formatDate(item.date)}</td>
            <div className={style.TableCategory} style={{backgroundColor: colors}}>
                <td>{categories[item.category].title}</td>
            </div>
            <td className={style.TableD}>{item.title}</td>
            {
                expensive ? 
                <div className={style.red} >
                    <td className={style.TableD}>R$ {item.value}</td>
                </div> : 
                <div className={style.green}>
                    <td className={style.TableD}>R$ {item.value}</td>
                </div>
            
            }
            
        </tr>
    );
}