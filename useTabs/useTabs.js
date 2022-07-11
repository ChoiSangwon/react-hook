const useTabs = (init, Tabs) => {
  if (!Tabs || !Array.isArray(Tabs)) {
    return;
  }
  const [curIndex, setCurIndex] = useState(init);
  return {
    currentItem: Tabs[curIndex],
    changeItem: setCurIndex
  };
};


export default useTabs;