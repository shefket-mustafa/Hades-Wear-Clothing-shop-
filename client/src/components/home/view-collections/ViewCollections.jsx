import { Link } from "react-router";

export default function ViewCollections() {
  return <div style={{
    display:'flex',
    justifyContent:'center', 
    alignItems:'center',
    lineHeight:'40px',
    paddingTop: '30px',

    }} className="view-collections-conteiner">
            <Link 
            style={{ 
            
            fontFamily:'sans-serif',
            textDecoration:'none',
            color:'white',
            backgroundColor:'black',
            alignSelf:'center',
            maxWidth:'300px',
            padding: '10px 35px'
            }}>VIEW COLLECTION</Link>
        </div>;

    
}