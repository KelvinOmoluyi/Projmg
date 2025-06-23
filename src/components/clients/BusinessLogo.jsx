const BusinessLogo = ({logoPath}) => {
    return (
        <div className="scroll-item">
            <img src={logoPath} alt="Company logos" className="scroll-logo" />
        </div>
    );
}
 
export default BusinessLogo;