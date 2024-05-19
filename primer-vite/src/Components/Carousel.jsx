import PropTypes from 'prop-types';
import { useEffect } from 'react';

const Carousel =({ 
                    width = "100%",
                    height = "100%",
                    data = [],
                    alt = "",
                    fit = "cover",
                    objectPosition = "center",
                    buttonStyle = "arrows",
                    autoPlay = false,
                    interval = 3000,
                    transitionDuration = 1000
                }) => {

    const containerStyle = {
        position: "relative",
        width: width,
        height: height,
        border: "1px solid black",
        overflow: "hidden",
        display: "grid",
        placeContent: " center",
    };

    const imageWrapperStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        display: "flex",
        transition: `transform ${transitionDuration / 1000}s ease-in-out`,
        transform: "translateX(0)",
    };

    const defaultButtonStyle = {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        border: "none",
        cursor: "pointer",
    };

    let currentIndex = 0;
    let intervalId = null;

    const startAutoPlay = () => {
        intervalId = setInterval(() => {
            handleClick("next");
        }, interval);
    };

    const stopAutoPlay = () => {
        clearInterval(intervalId);
    };

    useEffect(() => {
        if (autoPlay) {
            startAutoPlay();
        }

        return () => {
            stopAutoPlay();
        };
    }, []);

    const handleClick = (direction) => {
        const imageWrapper = document.getElementById("imageWrapper");
        const imageWidth = imageWrapper.firstChild.offsetWidth;
        const maxIndex = data.length - 1;
        if (direction === "next") {
            currentIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
        } else {
            currentIndex = currentIndex > 0 ? currentIndex - 1 : maxIndex;
        }
        const scrollAmount = -currentIndex * imageWidth;
        imageWrapper.style.transform = `translateX(${scrollAmount}px)`;
    };

    const renderButtons = () => {
        switch (buttonStyle) {
            case "arrows":
                return (
                    <>
                        <button style={{ ...defaultButtonStyle, left: 0 }} onClick={() => handleClick("prev")}>⬅</button>
                        <button style={{ ...defaultButtonStyle, right: 0 }} onClick={() => handleClick("next")}>⮕</button>
                    </>
                );
            case "text":
                return (
                    <>
                        <button style={{ ...defaultButtonStyle, left: 0 }} onClick={() => handleClick("prev")}>Anterior</button>
                        <button style={{ ...defaultButtonStyle, right: 0 }} onClick={() => handleClick("next")}>Siguiente</button>
                    </>
                );
            case "none":
                return null;
            default:
                return null;
        }
    };

    return (
        <div style={containerStyle} onMouseEnter={stopAutoPlay} onMouseLeave={startAutoPlay}>
            <div id="imageWrapper" style={imageWrapperStyle}>
                {data.map((imageUrl, index) => (
                    <img
                        key={index}
                        src={imageUrl}
                        alt={alt}
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: fit,
                            objectPosition: objectPosition
                        }}
                    />
                ))}
            </div>
            {renderButtons()}
        </div>
    );
};

export default Carousel;

Carousel.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    data: PropTypes.array,
    alt: PropTypes.string,
    fit: PropTypes.string,
    objectPosition: PropTypes.string,
    buttonStyle: PropTypes.oneOf(["arrows", "text", "none"]),
    autoPlay: PropTypes.bool,
    interval: PropTypes.number,
    transitionDuration: PropTypes.number,
};
