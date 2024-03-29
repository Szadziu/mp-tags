import axios from 'axios';
import TagTable from './components/TagTable/TagTable';
import {useState, useEffect} from 'react';

const App = () => {
    const [tags, setTags] = useState([]);
    const fetchTags = async () => {
        const response = await axios.get('https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow');
        setTags(response.data.items);
    };

    useEffect(() => {
        fetchTags();
    }, []);

    return <TagTable items={tags} />;
};

export default App;
