export default function Write(){
    return(
        <div>
            <h4>글작성</h4>
            <from action="/api/test" method="POST">
                <button type="submit">버튼</button>
            </from>
        </div>
    )
}