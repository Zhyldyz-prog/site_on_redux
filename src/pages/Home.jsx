import { useSelector } from "react-redux";

const Home = () => {
    const theme = useSelector(state => state.ui.theme);
    const posts = useSelector(state => state.ui.posts); 

    return (
        <main style={{
            padding: "40px",
            minHeight: "60vh",
            background: theme === "light" ? "#fff" : "#222",
            color: theme === 'light' ? "#000" : "#fff"
        }}>
            <h2>Главная страница</h2>
            <p>Добро пожаловать на сайт REDUX!</p>
            
            <h3>Последние посты (данные из Redux):</h3>
            <ul>
                {posts.map(post => (
                    <li key={post.id} style={{ marginBottom: "20px" }}>
                        <h4>{post.title}</h4>
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default Home;