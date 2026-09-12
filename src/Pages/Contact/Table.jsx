export default function Table(){
    return (
        <>
            <h3>Contact</h3>
            <table className="contact-table" border={0} cellSpacing={0} cellPadding={8}>
                <tbody>
                <tr className="contact-th" style={{}}>
                    <th className="t-title">Contact</th>
                    <th>Detail</th>
                </tr>
                <tr>
                    <td className="t-title">Address</td>
                    <td>Pelalawan, Riau</td>
                </tr>
                <tr>
                    <td className="t-title">Timezone</td>
                    <td>GMT+7</td>
                </tr>
                <tr>
                    <td className="t-title">E-mail</td>
                    <td>riosuryafernando12@gmail.com</td>
                </tr>
                <tr>
                    <td className="t-title">Phone</td>
                    <td>083183628845</td>
                </tr>
                </tbody>
            </table>
        </>

    )
}