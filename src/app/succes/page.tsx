import Link from "next/link"
import "./isSucces.css"

const IsSucces = () => {
    return (
        <div className="succes">
            <h1>Ordered Succesfully!</h1>
            <Link href='/' style={{textDecoration: 'none'}}><p>Back to main page</p></Link>
        </div>
    )
} 

export default IsSucces