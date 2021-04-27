import React from "react";
import events from "./events";
import Navbar from "./Navbar"

import "./styles/timeline.css";
  const isBrowser = typeof window !== `undefined`;
  
  const getScrollPosition = ({ element, useWindow }) => {
    if (!isBrowser) return { x: 0, y: 0 };
  
    const target = element ? element.current : document.body;
    const position = target.getBoundingClientRect();
  
    return useWindow
      ? { x: window.scrollX, y: window.scrollY }
      : { x: position.left, y: position.top };
  };
  
  const useScrollPosition = (effect, deps, element, useWindow, wait) => {
    const position = React.useRef(getScrollPosition({ useWindow }));
  
    let throttleTimeout = null;
  
    const callBack = () => {
      const currPos = getScrollPosition({ element, useWindow });
      effect({ prevPos: position.current, currPos });
      position.current = currPos;
      throttleTimeout = null;
    };
  
    React.useLayoutEffect(() => {
      const handleScroll = () => {
        if (wait) {
          if (throttleTimeout === null) {
            throttleTimeout = setTimeout(callBack, wait);
          }
        } else {
          callBack();
        }
      };
  
      // add for reflow or reposition on resize or scroll
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleScroll);
      };
    }, deps);
  };
  
  // Event Item
  const EventItem = (props) => {
    const timeItem = React.useRef();
    const [isVisible, setIsVisible] = React.useState(false);
  
    const checkElement = (el) => {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };
  
    React.useEffect(() => {
      setIsVisible(checkElement(timeItem.current));
    }, []);
  
    useScrollPosition(({ currPos }) => {
      setIsVisible(checkElement(timeItem.current));
    });
    const { date, content, role, company, location } = props;
    return (
      <li ref={timeItem} className={isVisible ? "inView" : null}>
        <div>
          <time>
            {date.from} - {date.to}
          </time>
          <h4 className="title">{role}</h4>
          <h3 className="company">{company}</h3>
          <p>
            <i>{location}</i>
          </p>
          <p className="description">{content}</p>
        </div>
      </li>
    );
  };
  

  const Timeline = (props) => {
    const scrollArea = React.useRef();
  
    const makeTimeline = (events) => {
      const evlist = props.events.map((item) => {
        return (
          <EventItem
            date={item.date}
            content={item.content}
            role={item.role}
            company={item.company}
            location={item.location}
            key={`${item.time}`}
          />
        );
      });
      return <ul>{evlist}</ul>;
    };
  
    return (
      <div className="wrapper" ref={scrollArea}>
      {/* <Navbar></Navbar>  */}
      <div className = "navbar-general">
        <ul>
          <li><a href = "/">Home</a></li>
          <li><a href = "#">About Us</a></li>
          <li><a href = "#">Media & Gallery</a></li>
          <li><a href = "#">Events</a></li>
          <li><a href = "#">Career</a></li>
          <li><a href = "#">Contact Us</a></li>
          <li><i class="fas fa-search"></i></li>
        </ul>
      </div>
        <section className="header">
          <div className="timeline-container">
            <h1>Our History</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas, lectus quis maximus fermentum, enim augue molestie libero, ac varius magna purus a ipsum. Aliquam suscipit, lacus lobortis consequat fringilla, mi mi rutrum eros, quis tincidunt mi nibh sit amet lectus. Donec ex ex, porta eu nisl molestie, feugiat imperdiet ante. Nullam iaculis aliquam eros, nec ultricies risus efficitur et. Vivamus nec elementum lacus, et hendrerit eros. Vivamus arcu lorem, vestibulum nec nulla quis, euismod molestie lectus. Donec sit amet rhoncus erat. Suspendisse ac blandit felis. Duis pulvinar dapibus tellus eu mattis. Fusce sem turpis, elementum quis fringilla laoreet, congue vitae ex. Nullam id sapien malesuada lectus ullamcorper dignissim quis a turpis. Curabitur ut quam gravida, maximus mauris ut, auctor metus.

Vivamus mattis nunc ut dolor dapibus, sit amet mattis sapien dapibus. In efficitur molestie mi sit amet fermentum. Mauris volutpat aliquam lectus ac sollicitudin. Mauris eu hendrerit mi, ac dictum justo. Quisque auctor, augue eget auctor sagittis, tellus dolor laoreet massa, quis condimentum leo enim quis sapien. Aliquam faucibus ac tellus nec feugiat. Ut convallis sit amet lacus id venenatis.</p>
           
          </div>
        </section>
  
        <section className="timeline">
          <ul className = "timeline-list">{makeTimeline(events)}</ul>
        </section>
      </div>
    );
  };
  

  export default Timeline