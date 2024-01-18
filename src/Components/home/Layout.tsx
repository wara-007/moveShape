import * as React from 'react';
import { useTranslation } from "react-i18next";
import './Home.scss';
import { Card, Col, Row, Select } from 'antd';



export const LayoutSt = () => {
   const { t, i18n } = useTranslation(['home', 'main']);
   const [currentIndex, setCurrentIndex] = React.useState(0);
   const [data, setData] = React.useState([
      {
         content: 'square'
      },

      {
         content: 'circle'
      },

      {
         content: 'oval'
      },

      {
         content: 'trapezoid'
      },

      {
         content: 'rectangle'
      },
      {
         content: 'parallelogram'
      }
   ]);



   const onClickLanguageChange = (value: string) => {
      const language = value;
      i18n.changeLanguage(language); //change the language
   }

   // const prevImage = () => {
   //    setSelectdId((prev) => (prev <= 1 ? data.length : prev - 1));
   //  };
   //  const nextImage = () => {
   //    setSelectdId((prev) => (prev >= data.length ? 1 : prev + 1));
   //  };

   // Functions


   const PrevSlide = () => {
      let arr = new Array();
      arr = data;
      let last = arr.pop();
      arr.unshift(last);


      setData(arr);

      setCurrentIndex(currentIndex + 1)
   }


   const NextSlide = () => {
      let arr = new Array();
      arr = data;
      arr.push(arr.shift());
      setData(arr);
      setCurrentIndex(currentIndex + 1)
      console.log("🚀 ~ NextSlide ~ data:", arr)

   }

   const MovePosition = () => {
      let arr = new Array();
      arr = data;
      for (var i = 0; i < 3; i++) {
         arr.push(arr.shift());
      }
      setData(arr);
      setCurrentIndex(currentIndex + 1)
   }


   React.useEffect(() => {

   }, [currentIndex])


   const Ui = () => {
      const Lists = data.map((item, index) => {
         return <div className="ctnr">
            <div className={item.content} onClick={shuffle}>
               {item.content}
            </div>
         </div>
      });

      var resultsRender = [];
      let iTemList = [];
      for (var i = 0; i < Lists.length; i++) {
         iTemList.push(Lists[i]);
         if (i % 3 === 2) {
            resultsRender.push(
               <div className="row">
                  {iTemList}
               </div>
            );
            iTemList = [];
         }
      }
      return resultsRender
   }

   const shuffle = () => { 
      let array = new Array();
      array = data;
      for (let i = array.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]]; 
      } 
      setData(array);
      setCurrentIndex(currentIndex + 1)
    }; 

   return (
      <div className="container">
         <div className="flex-ctnr">
            <div className="ctnr">
               <div className="left-triangle" onClick={NextSlide}></div>
            </div>
            <div className="ctnr">
               <div className="up-triangle" onClick={MovePosition}></div>
               <div className="down-triangle" onClick={MovePosition}></div>
            </div>
            <div className="ctnr">
               <div className="right-triangle" onClick={PrevSlide}></div>
            </div>
         </div>
         <div className="flex-ctnr"> {Ui()} </div>
      </div>
   );
}

