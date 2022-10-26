import {createMessage} from "@formkit/core";

export function useFormLoading(){

    function setFormLoadingOn(node){
        const loadingMessage = createMessage({
            key: 'loading',
            visible: false,
            value: true
        });
        node.store.set(loadingMessage);
        node.props.disabled = true;
    }

    function setFormLoadingOff(node){
        node.store.remove('loading');
        node.props.disabled = false;
    }

    return {setFormLoadingOn,setFormLoadingOff}
}
