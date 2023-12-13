import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Image from "./lmage";


const Write = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");
    let navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        if (title === "" || content === "") {
            return alert("제목 또는 내용을 채워줘요!");
        }

        let body = {
            title: title,
            content: content,
            image: image
        }

        axios
            .post("/api/post/Write", body)
            .then((resopnse) => {
                if (resopnse.data.success) {
                    alert("글 작성이 완료되었습니다.");
                    navigate("/list");
                } else {
                    alert("글 작성이 실패하였습니다.")
                }
            })
    }
    return (
        <div className='write__wrap'>
            <div className='write__header'>
                <h3>Write</h3>
                <p>글 작성하시겠습니까?</p>
            </div>
            <form className='write__form'>
                <fieldset>
                    <legend className="blind">글쓰기 영역</legend>

                    <div>
                        <label htmlFor="youName" className="required blind"></label>
                        <input
                            type="text"
                            id="youName"
                            placeholder='제목을 입력하세요'
                            value={title}
                            onChange={(e) => setTitle(e.currentTarget.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="youPass" className="required blind"></label>
                        <textarea
                            type="text"
                            id="youName"
                            placeholder='내용을 입력하세요'
                            value={content}
                            onChange={(e) => setContent(e.currentTarget.value)}
                        />
                    </div>

                    <Image setImage={setImage} />

                    <button type="submit" className="btn__style mt100" onClick={(e) => onSubmit(e)}>글 작성</button>
                </fieldset>
            </form>
        </div>
    )
}

export default Write