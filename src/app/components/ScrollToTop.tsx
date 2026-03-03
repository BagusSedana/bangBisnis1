import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // Tambahkan delay kecil agar komponen DOM tujuan selesai di-render
        setTimeout(() => {
            if (hash) {
                const id = hash.replace("#", "");
                const element = document.getElementById(id);
                if (element) {
                    // Beri offset agar tidak tertutup navbar (sekitar 80px)
                    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({
                        top: elementPosition - 80,
                        behavior: "smooth"
                    });
                }
            } else {
                window.scrollTo(0, 0);
            }
        }, 100);
    }, [pathname, hash]);

    return null;
}
