import { Link } from "react-router";

export default function ViewCollections() {
  return <div style={{
    display:'flex',
    justifyContent:'center', 
    alignItems:'center',
    lineHeight:'40px',
    paddingTop: '30px',
    gap: '15px'

    }} className="view-collections-conteiner">
            <Link to='/catalog/women'
            style={{ 
            
            fontFamily:'sans-serif',
            textDecoration:'none',
            color:'white',
            backgroundColor:'black',
            alignSelf:'center',
            maxWidth:'300px',
            padding: '10px 35px'
            }}>VIEW WOMENS COLLECTION</Link>

<Link  Link to='/catalog/men'
            style={{ 
            
            fontFamily:'sans-serif',
            textDecoration:'none',
            color:'white',
            backgroundColor:'black',
            alignSelf:'center',
            maxWidth:'300px',
            padding: '10px 35px'
            }}>VIEW MENS COLLECTION</Link>
        </div>;

    
}