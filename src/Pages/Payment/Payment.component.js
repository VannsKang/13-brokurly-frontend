import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "./Payment.styles.scss";

import americanExperss from "../../Images/american.png";
import carrot from "../../Images/carrot.jpeg";

class Payment extends Component {
  render() {
    return (
      <div className="Payment">
        <div className="payment-container">
          {/* header */}
          <header>
            <h2>주문서</h2>
            <p>주문하실 상품명 및 수량을 정확하게 확인해 주세요.</p>
          </header>
          {/* 상품 정보 */}
          <section className="section-name product-info">
            <h3>상품 정보</h3>
            <div className="product-info-container">
              <div className="products-list-bar">
                <span>상품 정보</span>
                <span>상품 금액</span>
              </div>
              <ul className="order-products">
                <li className="order-product">
                  <img src={carrot} alt="이미지 데이터" />
                  <div className="product-detail">
                    <span className="product-title">
                      [초록동당근] 상품 당근 10종
                    </span>
                    <span className="product-subtitle">
                      [초록동당근] 1개 / 개 당 15,000원
                    </span>
                  </div>
                  <span className="product-price">15,000원</span>
                </li>
                <li className="order-product">
                  <img src={carrot} alt="이미지 데이터" />
                  <div className="product-detail">
                    <span className="product-title">
                      [초록동당근] 상품 당근 10종
                    </span>
                    <span className="product-subtitle">
                      [초록동당근] 1개 / 개 당 15,000원
                    </span>
                  </div>
                  <span className="product-price">15,000원</span>
                </li>
                <li className="order-product">
                  <img src={carrot} alt="이미지 데이터" />
                  <div className="product-detail">
                    <span className="product-title">
                      [초록동당근] 상품 당근 10종
                    </span>
                    <span className="product-subtitle">
                      [초록동당근] 1개 / 개 당 15,000원
                    </span>
                  </div>
                  <span className="product-price">15,000원</span>
                </li>
              </ul>
            </div>
          </section>
          {/* 주문자 정보 */}
          <section className="section-name order-info">
            <h3>주문자 정보</h3>
            <div className="user-info-container">
              <div className="user-info">
                <span className="user-info-content">보내는 분*</span>
                <input className="user-info-input"></input>
              </div>
              <div className="user-info">
                <span className="user-info-content">휴대폰*</span>
                <input className="user-info-input"></input>
              </div>
              <div className="user-info">
                <span className="user-info-content">이메일*</span>
                <input className="user-info-input"></input>
                <div className="text-info">
                  <p>이메일을 통해 주문처리과정을 보내드립니다.</p>
                  <p>
                    정보 변경은 <b>마이컬리 > 개인정보</b> 수정 메뉴에서
                    가능합니다.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* 배송정보 */}
          <section className="section-name delivery-info">
            <h3>배송 정보</h3>
            <p className="delivery-holiday">
              *배송 휴무일:샛별배송(휴무없음),택배배송(일요일)
            </p>
            <div className="delivery-container">
              <div className="delivery-info spot">
                <span className="delivery-info-content">배송지</span>
                <div className="spot-info">
                  <div>
                    <span>샛별배송</span>
                    <span>기본배송지</span>
                  </div>
                  <span className="user-spot-info">서울 강서구 금낭화로</span>
                  <span className="user-spot-info">김복자,010-8870-8870</span>
                  <button className="change-button">변경</button>
                </div>
              </div>
              <div className="delivery-info receive-info">
                <span className="delivery-info-content">받으실장소</span>
                <div className="spot-info">
                  <span className="receive-method">문 앞</span>
                  <span className="receive-method">
                    출입방법:공동현관 비밀번호
                  </span>
                  <button className="change-button">변경</button>
                </div>
              </div>
            </div>
          </section>
          <section className="section-name payment-info">
            <div className="payment-info-left">
              <h3>결제 수단</h3>
              <div className="payment-method">
                <div>일반결제</div>
                <label className="container">
                  <input type="radio" className="check-input" />
                  <span className="checkmark"></span>
                  <span className="mark-name">신용카드</span>
                </label>
                <img src={americanExperss} alt="card"></img>
              </div>
            </div>
            <div className="payment-info-right">
              <h3>결제 금액</h3>
              <div className="payment-price">
                <div>
                  <span>주문 금액</span>
                  <span>197,880원</span>
                </div>
                <div>
                  <span className="product-price-sales">상품 금액</span>
                  <span>197,880원</span>
                </div>
                <div>
                  <span className="product-price-sales">상품 할인</span>
                  <span>197,880원</span>
                </div>
                <div>
                  <span>배송비</span>
                  <span>0원</span>
                </div>
                <div>
                  <span>적립금 사용</span>
                  <span>0원</span>
                </div>
                <div>
                  <span>최종 결제 금액</span>
                  <span className="total-price">187,880원</span>
                </div>
              </div>
            </div>
          </section>
          <section className="section-name complete-btn">
            <button className="pay-button">결제하기</button>
          </section>
        </div>
      </div>
    );
  }
}

export default withRouter(Payment);
