import React from "react";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

const textState = atom({
    key: 'textState',
    default: ''
})

const charCountState = selector({
    key: 'charCountState',
    get: ({get}) => {
        const text = get(textState);

        return text.length
    }
});

function CharacterCounter() {
    return(
        <div>
            <TextInput/>
            <CharacterCount/>
        </div>
    )
}

function CharacterCount() {
    const count= useRecoilValue(charCountState)

    return <>Character Count : {count}</>
}

function TextInput(){
    const [text, setText] = useRecoilState(textState);
    const onChange = (e) => {
        setText(e.target.value);
    };

    return(
        <div>
            <input type="text" value={text} onChange={onChange}/>
            <br/>
            Echo : {text}
        </div>
    )
}

export default CharacterCounter;