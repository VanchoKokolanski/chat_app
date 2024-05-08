import "./detail.css";

const Detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="user" />
        <h2>Jonh Doe</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="arrowUp" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="settings" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & hepl</span>
            <img src="./arrowUp.png" alt="privacy" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./arrowDown.png" alt="photos" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://picsum.photos/id/27/200/300"
                  alt="photoItem"
                />
                <span>photo_2024</span>
              </div>
              <img src="./download.png" alt="download" className="icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://picsum.photos/id/27/200/300"
                  alt="photoItem"
                />
                <span>photo_2024</span>
              </div>
              <img src="./download.png" alt="download" className="icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://picsum.photos/id/27/200/300"
                  alt="photoItem"
                />
                <span>photo_2024</span>
              </div>
              <img src="./download.png" alt="download" className="icon" />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared files</span>
            <img src="./arrowUp.png" alt="files" />
          </div>
        </div>
        <button>Block user</button>
        <button className="logout">Logout</button>
      </div>
    </div>
  );
};

export default Detail;
