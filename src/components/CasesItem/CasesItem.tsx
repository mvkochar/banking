import classes from './CasesItem.module.css'

type CasesItemProps = {
    id: number
    icon: string
    title: string
}

const CasesItem = ({id, icon, title}:CasesItemProps) => {
    return (
        <div className={classes.cases_item}>
            <div><img src={icon} alt={`case${id}`} /></div>
            <h5 className={classes.cases_item_title}>{title}</h5>
        </div>
    )
}

export default CasesItem