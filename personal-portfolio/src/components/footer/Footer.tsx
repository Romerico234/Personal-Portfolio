import "./Footer.css";

export default function Footer() {
    return (
        <div>
            <footer className="text-center text-lg-start bg-body-tertiary text-muted .fixed-bottom">
                <div
                    className="text-center p-4"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
                >
                    Made by Romerico David. Images used are the property of their respective owners.
                </div>
            </footer>
        </div>
    );
}
