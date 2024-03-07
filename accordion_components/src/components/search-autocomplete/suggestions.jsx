




export default function Suggestions({data}) {


    return (
        <uL>
            {
                data && data.length ?
                    data.map((item, index) => (
                        <li key={index}>{item}</li>
                    )) : null
            }
        </uL>
    )
}