import style from './style.module.css'

type Props = {
    title: string;
    value: number;
}

export const ResumeItem = ({title, value}: Props) =>{
    return(
        <div className={style.resumeContainer}>
            <div className={style.resumeTitle}>{title}</div>
            <div className={style.resumeValue}>{`R$ ${value}`}</div>
        </div>
    );
}