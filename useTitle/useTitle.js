const useTitle = (init) => {
    const [myTitle, SetMyTitle] = useState(init);
    const updateTitle = () => {
      const htmlTitle = document.querySelector("title");
      htmlTitle.innerText = myTitle;
    };
    useEffect(updateTitle, [myTitle]);
    return myTitle;
  };


export default useTitle;