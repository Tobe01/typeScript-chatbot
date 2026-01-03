import { useRef, useEffect } from 'react'

// Custom hook
function useAutoScroll(dependencies){
  const chatMessageRef = useRef(null);

  useEffect(() =>{
    const chatMessageElem = chatMessageRef.current;

    { chatMessageElem ? chatMessageElem.scrollTop = chatMessageElem.scrollHeight : ''}
  }, [dependencies]);

  return chatMessageRef;
}

export default useAutoScroll;