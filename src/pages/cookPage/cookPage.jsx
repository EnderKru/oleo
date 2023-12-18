import "../cookPage/cookPage.css";
import React, { useState, useEffect } from "react";

export function CookPage() {
  function register() {
    alert("Регистрация");
  }

  function login() {
    alert("Войти");
  }

  const [preferences, setPreferences] = useState({
    taste: "",
    allergies: "",
    produts: "",
  });

  const handleChange = (e) => {
    setPreferences({
      ...preferences,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/generateRecipe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(preferences),
      });

      if (!response.ok) {
        throw new Error("Error when receiving prescription");
      }

      const data = await response.json();
      console.log(data.recipe);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  function RecipeChat() {
    const [chatHistory, setChatHistory] = useState([]);

    const fetchRecipe = async () => {
      try {
        const response = await fetch("https://example.com/api/generateRecipe");
        if (!response.ok) {
          throw new Error("Error when receiving prescription");
        }

        const data = await response.json();

        setChatHistory((prevHistory) => [...prevHistory, data.recipe]);
      } catch (error) {
        console.error("error:", error.message);
      }
    };

    useEffect(() => {
      fetchRecipe();
    }, []);

    return (
      <div>
        <div className="chat-history">
          {chatHistory.map((message, index) => (
            <div key={index} className="chat-message">
              {message}
            </div>
          ))}
        </div>
      </div>
    );
  }

  const [isImageOpen, setIsImageOpen] = useState(false);

  const openImage = () => {
    setIsImageOpen(true);
  };

  const closeImage = () => {
    setIsImageOpen(false);
  };

  return (
    <div>
      <div className="cook-page">
        <header>
          <img src="./src/assets/фото/logo.png" className="logo-cook" alt="Logo" />
          <div className="custom-tooltip-cook">
            <img
              src="../src/assets/фото/image 8person.png"
              alt="Mini Photo"
              className="mini-photo-cook"
              id="person-cook"
            />
            <div className="tooltiptext-cook">
              <a href="http://localhost:5173/registration" className="sign-up-cook" onClick={register}>
                sign up
              </a>
              <a href="http://localhost:5173/login" className="log-in-cook" onClick={login}>
                log in
              </a>
            </div>
          </div>
        </header>

        <div className="container-cook">
          <div className="left">
            <div className="title-left">Cook your dish</div>
            <div className="input-left">
              <div className="wishes">
                <div className="title-cook">Your wishes</div>
                <div className="input-cook">
                  <form onSubmit={handleSubmit}>
                    <label>
                      <input
                        className="i-cook"
                        type="text"
                        name="taste"
                        value={preferences.taste}
                        onChange={handleChange}
                        placeholder="I want more sweet and not spicy..."
                      />
                    </label>
                  </form>
                </div>
              </div>

              <div className="contraindications">
                <div className="title-cook">Your contraindications</div>
                <div className="input-cook">
                  <form onSubmit={handleSubmit}>
                    <label>
                      <input
                        className="i-cook"
                        type="text"
                        name="allergies"
                        value={preferences.allergies}
                        onChange={handleChange}
                        placeholder="I don’t eat dishes with tomato, fish... "
                      />
                    </label>
                  </form>
                </div>
              </div>

              <div className="products">
                <div className="title-cook">Your products that you have</div>
                <div className="input-cook">
                  <form onSubmit={handleSubmit}>
                    <label>
                      <input
                        className="i-cook"
                        type="text"
                        name="produts"
                        value={preferences.produts}
                        onChange={handleChange}
                        placeholder="Milk, eggs, cucumber... "
                      />
                    </label>
                  </form>
                </div>
              </div>
            </div>

            <div className="buttons-cook">
              <div className="COOK">
                <a href="" onClick={openImage}>
                  <img src="./src/assets/фото/image 43.svg" className="fork-cook" alt="Cook" />
                  COOK
                </a>
              </div>
              <div className="bon-app">Bon appetit</div>
            </div>
            <div className="knife-cook">
              <img src="./src/assets/фото/Knife-PNG 1.png" className='knife' alt="" />
            </div>
          </div>

          <div className="right">
            <div className="title-right">Recipe for you</div>
            <div className="input-right">
              <RecipeChat />
              <div className="box-cook">
                <div className="input-photo">
                  <img
                    src="./src/assets/фото/p_O.jpg"
                    alt="Описание изображения"
                    className="small-image"
                    onClick={openImage}
                  />
                </div>

                {isImageOpen && (
                  <div className="popup-cook">
                    <div className="popup-content-cook">
                      <span className="close" onClick={closeImage}>
                        &times;
                      </span>
                      <img
                        src="./src/assets/фото/p_O.jpg"
                        alt="Описание изображения"
                        className="popup-image-cook"
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className="input-photo"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
