import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SideMenu.styles.scss";

class SideMenu extends Component {
  constructor() {
    super();
    this.state = {
      itemsList: [1, 2, 3, 4, 5, 6, 7],
      itemsCount: 7,
      listYcoordinate: 0,
      isTopButtonVisible: false,
      isBottomButtonVisible: true,
    };
  }

  slideList = (e) => {
    const { itemsCount, listYcoordinate } = this.state;
    const isClickTop = e.target.className.includes("top");
    const plusMinus = !isClickTop ? -1 : 1;
    const itemWidth = 80;
    const containerCountLimit = 1;
    const containerWidth = itemWidth * containerCountLimit;
    const divisionCount = itemsCount / containerCountLimit;
    const itemsCountModulo = itemsCount % containerCountLimit;
    const numClickable =
      divisionCount % 1 === 0
        ? divisionCount - 1
        : divisionCount - (divisionCount % 1);
    const yIncrementCount =
      numClickable <= 1 && Math.abs(listYcoordinate) > 0
        ? 1
        : Math.ceil(Math.abs(listYcoordinate) / containerWidth);
    const numBottomClickRemaining = numClickable - yIncrementCount;
    const isFinalBottomClickConditionReached =
      !isClickTop && numBottomClickRemaining === 1;
    const isFirstTopClick = isClickTop && numBottomClickRemaining === 0;
    const isFinalTopClickConditionReached = isClickTop && yIncrementCount === 1;
    const yIncrementPercentage =
      itemsCountModulo === 0 ? 1 : itemsCountModulo / containerCountLimit;
    const yIncrement =
      isFinalBottomClickConditionReached || isFirstTopClick
        ? containerWidth * yIncrementPercentage * plusMinus
        : containerWidth * plusMinus;
    this.setState({
      listYcoordinate: listYcoordinate + yIncrement,
      isBottomButtonVisible: !isFinalBottomClickConditionReached,
      isTopButtonVisible: !isFinalTopClickConditionReached,
    });
  };

  render() {
    const {
      itemsList,
      listYcoordinate,
      isTopButtonVisible,
      isBottomButtonVisible,
    } = this.state;
    const { position } = this.props;
    let itemsTranslation = {
      transform: `translate(0, ${listYcoordinate}px)`,
      transition: `transform 600ms`,
    };
    const positionToClassName = {
      "-2": "SideMenu",
      "-1": "SideMenu on-scroll-down",
      0: "SideMenu default",
      1: "SideMenu on-scroll-up",
      2: "SideMenu scroll-end",
    };
    return (
      <div className={positionToClassName[position]}>
        <div className="delivery-info">
          <p>
            샛별 택배
            <br />
            배송안내
          </p>
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/8646c479493401.5cc4c9ebb7d99.png"
            alt="deliver info sunset img"
          />
        </div>
        <ul className="menus">
          <li>
            <Link className="Link" to="/events">
              이벤트
            </Link>
          </li>
          <li>
            <Link className="Link" to="/recipe">
              레시피
            </Link>
          </li>
        </ul>
        <div className="recently-seen-div">
          <button
            className={
              isTopButtonVisible ? "button-arrow top" : "button-arrow top hide"
            }
            disabled={!isTopButtonVisible}
            onClick={this.slideList}
          >
            <img
              className="button-arrow-img top"
              src="./Images/SideMenu/button_arrow.png"
              alt="recent list top button"
            />
          </button>
          <button
            className={
              isBottomButtonVisible
                ? "button-arrow bottom"
                : "button-arrow bottom hide"
            }
            disabled={!isBottomButtonVisible}
            onClick={this.slideList}
          >
            <img
              className="button-arrow-img bottom"
              src="./Images/SideMenu/button_arrow.png"
              alt="recent list bottom button"
            />
          </button>
          <p>최근 본 상품</p>
          <div className="recently-seen-container">
            <ul style={itemsTranslation}>
              {itemsList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default SideMenu;