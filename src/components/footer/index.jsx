

function Footer() {
    return (
        <footer className=" p-3 lg:p-7 " >
            <div className=" flex flex-col gap-4 md:flex-row">
            <p>�� {new Date().getFullYear()} All rights reserved.</p>
            <p className=" underline text-lg text-blue-700">Created by <a href="https://x.com/dTech6195">Delight Vincent (dTech)</a></p>
            <p className=" underline text-lg text-blue-700">Powered by <a href="www.paystack.com">pay Stack</a></p>
            </div>

        </footer>
    );
}

export default Footer;