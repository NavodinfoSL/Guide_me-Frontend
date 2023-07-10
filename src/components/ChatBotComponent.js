import ChatBot, { CustomComponent } from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import { Q_1,Q_2,Q_3,Q_4,Q_5,Q_6,Q_7,Q_8,Q_9,Q_10 } from "../data/ChatBotData";
import { useState } from "react";

const ChatBotComponent = () => {
    const [refersh,setRefersh] = useState(false)
    const theme = {
      background: "#f5f8fb",
      fontFamily: "Helvetica Neue",
      headerBgColor: "black",
  
      headerFontColor: "#fff",
      headerFontSize: "15px",
      botBubbleColor: "#EF6C00",
      botFontColor: "#fff",
      userBubbleColor: "#fff",
      userFontColor: "#4a4a4a",
    };
  
    const config = {
      width: "400px",
      height: "500px",
      floating: true,
      // botAvatar:"guidme_logo.png",
      // avatarStyle:{
      //   width:"10px",
      //   height:"25px",
      // }
      // opened:true
    };
  
    const handleEnd = () => {
      console.log('end');
  
      setTimeout(() => {
        setRefersh(true)
      }, 3000);
      
    }
  
    const steps = [
      {
        id: "Greet",
        message: "Hello, Welcome to GuideMe",
        trigger: "Done",
      },
  
      {
        id: "Done",
        message: "Please enter your name!",
        trigger: "waiting1",
      },
  
      {
        id: "waiting1",
        user: true,
        trigger: "Name",
      },
  
      {
        id: "Name",
        message: "Hi {previousValue}, Please select your issue",
        trigger: "issues_1",
      },
  
      {
        id: "issues_1",
  
        options: [
          {
            value: "Q_1",
            label: "1. How do I work with GuideMe ?",
            trigger: "Q_1",
          },
          {
            value: "Q_2",
            label: "2. What is Guideme?",
            trigger: "Q_2",
          },
          {
            value: "Q_3",
            label: "3. How do I create an account ?",
            trigger: "Q_3",
          },
          {
            value: "Q_4",
            label: "4. Can I change the password ?",
            trigger: "Q_4",
          },
          {
            value: "Q_5",
            label: "5. How do I find a consultant ?",
            trigger: "Q_5",
          },
          {
            value: "Q_6",
            label: "6. How do I know the credibility of the consultants ?",
            trigger: "Q_6",
          },
          {
            value: "Q_7",
            label: "7. What industries are the jobs based on ?",
            trigger: "Q_7",
          },
          {
            value: "Q_8",
            label: "8. How do I delete my account ?",
            trigger: "Q_8",
          },
          {
            value: "Q_9",
            label: "9. Is there any hidden payments with GuideMe ?",
            trigger: "Q_9",
          },
          {
            value: "Q_10",
            label: "10.Can I give a feedback for the consultant ?",
            trigger: "Q_10",
          },
        ],
      },
  
      {
        id: "Q_1",
  
        component: <Q_1 />,
        trigger: "issues_2",
      },
  
      {
        id: "Q_2",
  
        component: <Q_2 />,
        trigger: "issues_2",
      },
      {
        id: "Q_3",
        component: <Q_3 />,
        trigger: "issues_2",
      },
  
      {
        id: "Q_4",
  
        component: <Q_4 />,
        trigger: "issues_2",
      },
  
      {
        id: "Q_5",
        component: <Q_5 />,
        trigger: "issues_2",
      },
  
      {
        id: "Q_6",
        component: <Q_6 />,
        trigger: "issues_2",
      },
  
      {
        id: "Q_7",
        component: <Q_7 />,
        trigger: "issues_2",
      },
  
      {
        id: "Q_8",
        component: <Q_8 />,
        trigger: "issues_2",
      },
  
      {
        id: "Q_9",
        component: <Q_9 />,
        trigger: "issues_2",
      },
  
      {
        id: "Q_10",
        component: <Q_10 />,
        trigger: "issues_2",
      },
  
      {
        id: "issues_2",
        options: [
          { value: "End Chat", label: "End Chat", trigger: "end" },
          { value: "Previous Menu", label: "Previous Menu", trigger: "issues_1" },
        ],
      },
  
      {
        id: "end",
        message: "Thanks for Contact Us, Our team will resolve your issue ASAP",
        end: true,
      },
    ];
  return (
    <>
      <ThemeProvider theme={theme}>
        <ChatBot steps={steps} headerTitle="Guide Me" {...config} handleEnd={handleEnd} key={refersh}/>
      </ThemeProvider>
    </>
  )
}

export default ChatBotComponent
