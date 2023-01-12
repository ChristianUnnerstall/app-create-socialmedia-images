import { useEffect, useRef, useState } from 'react';
import './App.css';
import exportAsImage from './exportAsImage';

const exampleData = [
  {
    title: 'Awesome title',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.',
    website: 'myawesomewebsite'
  },
  {
    title: 'Titles all over the place',
    description: 'Lorum Ipsum',
    website: 'mypowerwebsite'
  },
  {
    title: 'Awesome title',
    description: 'Lorum Ipsum'
  },
  {
    title: 'One title to rule them all',
    description: 'Lorum Ipsum',
    website: 'mypowerwebsite'
  },
]

function getRandomItem(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  return item;
}

function App() {
  const [filename, setFilename] = useState('export');
  const [data, setData] = useState('');
  const exportRef = useRef();

  useEffect(() => {
    setData(getRandomItem(exampleData))
  }, [])

  return (
    <div className="wrapper">
      <div className="main">
        <div className="settings">
          <h3>Data</h3>
          <button onClick={() => {
            setData(getRandomItem(exampleData));
          }}> 
            Load data
          </button>
          <div className="export">
            <h3>Export</h3>
            <input type="text" onChange={e => setFilename(e.target.value)} value={filename}/>
            <button onClick={() => exportAsImage(exportRef.current, filename)}> 
              Capture Image
            </button>
          </div>
        </div>
        <div ref={exportRef} className="canvas">
          <div className="canvas-inner">
            {data.title !== "" && 
              <h1 className="title">{data.title}</h1>
            }
            {data.description !== "" &&
              <p className="description">{data.description}</p>
            }
            {data.website !== "" && 
              <p className="website">{data.website}</p>
            }
          </div>
        </div>
      </div>
      <div className="footer">
        Developed by <a href="https://christianunnerstall.com/" target="_blank">Christian Unnerstall</a>. <a href="https://Git repository!
      </div>
    </div>
  );
}

export default App;
