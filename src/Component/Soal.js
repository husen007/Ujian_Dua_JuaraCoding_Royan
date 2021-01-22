import React from 'react';
import Home from './Home';

function Soal() {
    return (
        <Home kirim='[{
            "type": "radio",
            "soal": "Siapakah penemu baling-baling bambu?",
            "a": "Doraemon",
            "b": "Chelsea Islan",
            "c": "Nobita",
            "d": "Naruto",
            "jawab": "a"
        }, {
            "type": "checkbox",
            "soal": "Pilihlah 3 yang benar mengenai aqil?",
            "option": ["Trainer Juara Coding", "Manusia", "Anggota Avenger"],
            "jawab": ["Manusia", "Anggota Avenger"]
        }, {
            "type": "essay",
            "soal": "Ceritakan pengalaman anda ketika sedang tidur?"
        }]' />
    )
}

export default Soal;

