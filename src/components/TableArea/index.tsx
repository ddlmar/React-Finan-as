import style from './styles.module.css'
import { Item } from '../../types/Item';
import { TableItem } from '../TableItem';
type Props = {
    list: Item[]
}

export const TableArea = ({list}: Props) => {


    return (
        <table className={style.Table}>
            <thead>
                <tr className={style.TableItemSpace}>
                    <th className={style.th1}>Data</th>
                    <th className={style.th1}>Categoria</th>
                    <th className={style.th1}>Titulo</th>
                    <th className={style.th1}>Valor</th>

                </tr>
            </thead>
            <tbody className={style.TableBody}>
                {list.map((item, index)=>(
                    <TableItem key={index} item={item} />
                )    
                )}
            </tbody>
        </table>
    );
}