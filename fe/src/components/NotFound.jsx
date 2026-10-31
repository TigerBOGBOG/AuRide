
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>ไม่พบหน้าที่คุณกำลังค้นหา</p>
            <Link to="/login">กลับไปหน้า Login</Link>
        </div>
    );
}