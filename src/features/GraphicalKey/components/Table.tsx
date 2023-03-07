import Circle from "./Circle";
import styles from "./ui/Table.module.css"

const Table = () => {
    return (
        <table className={styles.table}>
            <tbody>
            <tr>
                <td><Circle idx={0}/></td>
                <td><Circle idx={1}/></td>
                <td><Circle idx={2}/></td>
            </tr>
            <tr>
                <td><Circle idx={3}/></td>
                <td><Circle idx={4}/></td>
                <td><Circle idx={5}/></td>
            </tr>
            <tr>
                <td><Circle idx={6}/></td>
                <td><Circle idx={7}/></td>
                <td><Circle idx={8}/></td>
            </tr>
            </tbody>
        </table>
    );
}
export default Table;