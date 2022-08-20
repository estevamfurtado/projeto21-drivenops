import { useEffect, useState } from "react";
import axios from "axios";


export default function All() {

    const [students, setStudents] = useState([]);

    console.log('ALL PAGES WORKED FINE');

    useEffect(async () => {
        const API_URL = process.env.REACT_APP_BASE_URL;
        try {
            const response = await axios.get(`${API_URL}/students`);
            const students = response.data;
            if (!students) {
                alert("Putz! Não há estudantes cadastrados para o sorteio!");
            } else {
                setStudents(students);
            }
        } catch (error) {
            alert("Não foi possível realizar o sorteio!");
        }
    }, []);

    return <div>
        {students.length > 0 ? students.map((s, x) => <h1 key={x}>{s.name}</h1>) : "Não existem alunos cadastrados"}
    </div>
}
