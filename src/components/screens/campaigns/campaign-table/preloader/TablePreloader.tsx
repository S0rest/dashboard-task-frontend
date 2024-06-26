import { BallLoader } from '@/assets/CommonIcons'
import s from './TablePreloader.module.scss';

const TablePreloader = () => {
	return (
		<tr className={s.loader}>
      <td>
        <BallLoader />
      </td>
    </tr>
	)
}

export default TablePreloader