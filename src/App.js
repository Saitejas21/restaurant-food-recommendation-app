import React from "react";
import "./styles.css";
import { useState } from "react";

const hotelDb = {
  North_Indian: [
    { name: "Chole Bhature", rating: "4/5" },
    { name: "Rogan Josh", rating: "3.5/5" },
    { name: "Stuffed Bati", rating: "3/5" },
    { name: "Malai ka Kheer", rating: "3.5/5" },
    { name: "Chicken Dum Biriyani", rating: "4/5" },
    { name: "Aloo Samosa", rating: "5/5" },
    { name: "Nihari Gosht", rating: "3/5" },
    { name: "Butter Chicken", rating: "4/5" },
    { name: "Dahi Bhalla", rating: "4.5/5" },
    { name: "Almond Malai Kulfi", rating: "4/5" }
  ],

  South_Indian: [
    { name: "Idli", rating: "4/5" },
    { name: "Plain Dosa", rating: "3.5/5" },
    { name: "Masala Dosa", rating: "3/5" },
    { name: "Set Dosa", rating: "3.5/5" },
    { name: "Onion Utthapam", rating: "4/5" },
    { name: "Puliyogare", rating: "5/5" },
    { name: "Bisi Bele Bath", rating: "3/5" },
    { name: "Lemon Rice", rating: "4/5" },
    { name: "Tomato Bath", rating: "4.5/5" },
    { name: "Veg Biriyani", rating: "4/5" }
  ],

  Chinese: [
    { name: "Gobi Manchurian", rating: "4/5" },
    { name: "Gobi 65", rating: "3.5/5" },
    { name: "Mushroom Manchurian", rating: "3/5" },
    { name: "Mushroom 65", rating: "3.5/5" },
    { name: "Baby Corn Manchurian", rating: "4/5" },
    { name: "Veg Noodles", rating: "5/5" },
    { name: "Ghee Rice", rating: "3/5" },
    { name: "Fried Rice", rating: "4/5" },
    { name: "Gobi Noodles", rating: "4.5/5" },
    { name: "Gobi Rice", rating: "4/5" }
  ],

  Drinks: [
    { name: "Mosambi Juice", rating: "4/5" },
    { name: "Orange Juice", rating: "3.5/5" },
    { name: "Mango Juice", rating: "3/5" },
    { name: "Apple Juice", rating: "3.5/5" },
    { name: "Banana Milkshake", rating: "4/5" },
    { name: "Strawberry Milkshake", rating: "5/5" },
    { name: "Muskmelon Juice", rating: "3/5" },
    { name: "Guava Juice", rating: "4/5" },
    { name: "Watermelon Juice", rating: "4.5/5" },
    { name: "Cuckoo Juice", rating: "4/5" }
  ],

  Chats: [
    { name: "Pani Puri", rating: "4/5" },
    { name: "Masala Puri", rating: "3.5/5" },
    { name: "Bhel Puri", rating: "3/5" },
    { name: "Boti Masala", rating: "3.5/5" },
    { name: "Sev Masala", rating: "4/5" },
    { name: "Dikki Masala", rating: "5/5" },
    { name: "Pudina Bhel", rating: "3/5" },
    { name: "Garlic Bhel", rating: "4/5" },
    { name: "Nippat Masala", rating: "4.5/5" },
    { name: "Sony Masala", rating: "4/5" }
  ]
};

export default function App() {
  const [selectedTopic, setTopic] = useState("Chats");
  function topicClickHandler(topic) {
    setTopic(topic);
  }
  return (
    <div className="App">
      <h1>S.T.A.R. Hotels Recommendation App</h1>
      <p style={{ fontSize: "medium" }}>
        {" "}
        This is our Restaurant dishes Recommendation app. Here are some of
        mainly recommended dishes exclusively by our Top Chefs 🧑‍🍳.
        <br />
        Ratings are given by our lovely customers 💖.
      </p>
      <div>
        {Object.keys(hotelDb).map((topic) => (
          <button
            onClick={() => topicClickHandler(topic)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem 1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem",
              fontFamily: "poppins"
            }}
          >
            {topic}
          </button>
        ))}
      </div>
      <hr />

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {hotelDb[selectedTopic].map((food) => (
            <li
              key={food.name}
              style={{
                listStyle: "name",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}>{food.name}</div>
              <div style={{ fontSize: "smaller" }}>{food.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
