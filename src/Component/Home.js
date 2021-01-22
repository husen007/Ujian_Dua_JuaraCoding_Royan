import React from 'react';

const Home = (props) => {
    let rec = JSON.parse(props.kirim);
    console.log(rec);
    // rec[0].

    return (<div id="radio">
        <div><br></br>
            <label>1. {rec[0].soal}</label>
            <br/>
            <input type={rec[0].type} id="radio1" checked />{rec[0].a} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type={rec[0].type} id="radio2" />{rec[0].b}
            <br/>
            <input type={rec[0].type} id="radio3" />{rec[0].c} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type={rec[0].type} id="radio4" />{rec[0].d}
        </div>
        <div><br></br>
            <label> 2. {rec[1].soal}</label>
            <br/>
            <input type={rec[1].type} id="checkbox1" checked />
            <label>{rec[1].option[0]}</label><br/>

            <input type={rec[1].type} id="checkbox2" checked />
            <label>{rec[1].option[1]}</label><br/>

            <input type={rec[1].type} id="checkbox3" />
            <label>{rec[1].option[2]}</label><br/>
        </div>
        <div><br></br>
            <label> 3. {rec[2].soal}</label>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;
            <textarea  type={rec[2].type} className="form-control" cols="45" rows="10" />
        </div>

    </div>)
}
export default Home;