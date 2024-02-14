import React from "react";
import "./App.css";

import colors from "./utils/colors";
import Screen from "./components/Screen";

import monkey_adventure from "./assets/monkey_adventure.gif";
import monkey_another from "./assets/monkey_another.gif";
import monkey_anyways from "./assets/monkey_anyways.gif";
import monkey_best from "./assets/monkey_best.gif";
import monkey_dev from "./assets/monkey_dev.gif";
import monkey_fight from "./assets/monkey_fight.gif";
import monkey_flag from "./assets/monkey_flag.gif";
import monkey_games from "./assets/monkey_games.gif";
import monkey_hi from "./assets/monkey_hi.gif";
import monkey_hug from "./assets/monkey_hug.gif";
import monkey_laugh from "./assets/monkey_laugh.gif";
import monkey_lift from "./assets/monkey_lift.gif";
import monkey_miss from "./assets/monkey_miss.gif";
import monkey_phone from "./assets/monkey_phone.gif";
import monkey_sillyme from "./assets/monkey_sillyme.gif";
import monkey_sorry1 from "./assets/monkey_sorry1.gif";
import monkey_sorry2 from "./assets/monkey_sorry2.gif";
import monkey_sorry3 from "./assets/monkey_sorry3.gif";
import view from "./assets/view.gif";

const App = () => {
  return (
    <div className="main">
      <Screen
        imageUrl={monkey_hi}
        bgColor={colors.fuschia}
        textColor={colors.white}
        title="Hey Lyka!"
        text="I've been a bit bananas lately, but I promise this isn't a monkey business. Take a moment, and enjoy the show. 🐵❤️
        (P.S. turn the sound up while you go through this hehe)"
        btnText="CLICK!"
        sequence="1"
      />
      <Screen
        imageUrl={monkey_sillyme}
        bgColor={colors.hotpink}
        textColor={colors.white}
        title="If you're wondering who it is, YES... it's the silly monkey"
        text="I know it's been a while but I've been tryna make this thing for a while and wanted to finish it ASAP."
        btnText="CLICK!"
        sequence="2"
      />
      <Screen
        imageUrl={monkey_dev}
        bgColor={colors.blue}
        textColor={colors.white}
        title="I'm sorry it's taken this long!"
        text="but I hope you find some time to go through this"
        btnText="CLICK"
        sequence="3"
      />
      <Screen
        imageUrl={monkey_flag}
        bgColor={colors.pink}
        textColor={colors.white}
        title="OKAY I KNOW I SHOULD HAVE HANDLED THIS BETTER"
        text="I'VE BEEN A SELFISH DICK AND YOU DON'T HAVE TO FORGIVE ME (COMPLETELY), AND I'LL UNDERSTAND! BUT I HOPE THIS WILL LET YOU KNOW HOW MUCH YOU MEAN TO ME"
        btnText="CLICK"
        sequence="4"
      />
      <Screen
        imageUrl={monkey_fight}
        bgColor={colors.dark}
        textColor={colors.white}
        title="You MEAN EVERYTHING TO ME!"
        text="I know we've had situations/fights like this before, and I should've reached out to you sooner. But sometimes, my fear of disappointing you gets the best of me. I hope you can empathize with me and understand that I'm trying my best to learn and grow."
        btnText="CLICK"
        sequence="5"
      />
      <Screen
        imageUrl={monkey_sorry1}
        bgColor={colors.red}
        textColor={colors.white}
        title="I Want to Make Things Right"
        text="I'm truly sorry for my mistakes. I know I've hurt you, and I want to do everything I can to make things right between us, and I hope this can be a start"
        btnText="CLICK"
        sequence="6"
      />
      <Screen
        imageUrl={monkey_miss}
        bgColor={colors.green}
        textColor={colors.white}
        title="Doing this makes me realise how much I've missed you being with my dumbass"
        text="I'VE MISSED..."
        btnText="..."
        sequence="7"
      />
      <Screen
        imageUrl={monkey_laugh}
        bgColor={colors.blue}
        textColor={colors.white}
        title="Your Laugh"
        text="I love making you happy and hearing your laugh even when you're just scrolling through memes and hear your nerdy-ass snort, it makes me happy that you're comfortable enough to show your nerdy and wierd ass side to me"
        btnText="CLICK"
        sequence="8"
      />
      <Screen
        imageUrl={monkey_phone}
        bgColor={colors.pink}
        textColor={colors.black}
        title="Talking to You"
        text="Our conversations are my favorite part of the day. Even though I may not seem like I'm listening, I really am! (you just take me by surprise sometime when you ask what you've said so I fumble hehe). But hearing your voice after a hard day at work does help me forget all the stress that I've had"
        btnText="CLICK"
        sequence="9"
      />
      <Screen
        imageUrl={monkey_hug}
        bgColor={colors.orange}
        textColor={colors.white}
        title="Having You in My Arms... and you spooning me *sigh*"
        text="There's no place I'd rather be than holding you close or having my butt wrapped around your legs, whether it's during the rom coms, moneysigneric, chimichonga sisters, Love Island (YES I KNOW WE NEED TO CATCH UP ON THAT!), but most of all, when we sleep. 
        knowing that you're in my arms makes me feel so at ease even when I'm snoring my ass off"
        btnText="CLICK"
        sequence="10"
      />
      <Screen
        imageUrl={monkey_lift}
        bgColor={colors.red}
        textColor={colors.white}
        title="Pumping Our Guns in the Gym Together"
        text="Thank you for motivating me and I hope I motivate you too. I do miss admiring yo phat ass when it's all lookin juicy after a hard sesh at the gym hehe"
        btnText="CLICK"
        sequence="11"
      />
      <Screen
        imageUrl={monkey_games}
        bgColor={colors.hotpink}
        textColor={colors.white}
        title="Raging in League or shooting some zombies together"
        text="You're my favorite teammate, and it turns me on when I hear you call people a bitch or tell em to STFU, we can't end with an L!"
        btnText="CLICK"
        sequence="12"
      />
      <Screen
        imageUrl={monkey_adventure}
        bgColor={colors.blue}
        textColor={colors.white}
        title="Our adventures (far or near)"
        text="whether it's the city or the beach or the hikes, and the concerts or festivals. I'm glad it's you by my side"
        btnText="CLICK"
        sequence="13"
      />
      <Screen
        imageUrl={view}
        bgColor={colors.green}
        textColor={colors.white}
        title="chasing the views together"
        text="Whether it's the sunrise, sunset, or the lakes, or the mountains. 
        Experiencing these views together makes it even more memorable but always know that you're my best biew"
        btnText="CLICK"
        sequence="14"
      />
      <Screen
        imageUrl={monkey_best}
        bgColor={colors.blue}
        textColor={colors.white}
        title="You Motivate Me to Be the Best Me"
        text="Your love and support inspire me every day. With you by my side, I feel unstoppable. Let's chase our dreams together and become the best versions of ourselves."
        btnText="CLICK"
        sequence="15"
      />
      <Screen
        imageUrl={monkey_sorry3}
        bgColor={colors.red}
        textColor={colors.white}
        title="TO SUMMARIZE"
        text="I MISS YOU A LOT AND I'M REALLY SORRRRRRY FOR EVERYTHING THESE PAST COUPLE DAYS ~ JAN"
        btnText="CLICK"
        sequence="16"
      />
      <Screen
        imageUrl={monkey_anyways}
        bgColor={colors.pink}
        textColor={colors.white}
        title="ANYWAYS...."
        text="again I'm not expecting full forgiveness (well maybe some, I mean this did take a lot of goddam time so cut me some slack)..... I JOKE!!!!!! *MWUAH*
        But really I appreciate you for being you and even though it gets heated sometimes I know you're just doing what you think the best for me and for us so thank you!"
        btnText="CLICK"
        sequence="17"
      />
      <Screen
        imageUrl={monkey_another}
        bgColor={colors.green}
        textColor={colors.white}
        title="BUT THERE IS ANOTHER REASON WHY I DID THIS"
        text="you know the drill by now, hit the click button will ya!"
        btnText="CLICK HERE!!!!!!"
        sequence="18"
      />
      <Screen
        imageUrl={monkey_sorry2}
        bgColor={colors.red}
        textColor={colors.white}
        title="ANGELIKA TIANGSON, I JAN BANDA WOULD LIKE THE HONOURS, TO TAKE YOU OUT FOR VALENTINES IF THAT'S OKAY WITH YOU"
        text="I know it's last minute (but you know me) so let me know if you still wanna hang out with this monkey today"
        sequence="19"
      />
      <Screen
        imageUrl={monkey_anyways}
        bgColor={colors.blue}
        textColor={colors.white}
        title="WELL LOOK WHO'S COMING BACK NOW HEHEHEHEHE"
        text="I'm joking, I'm glad you said yes.
        let's add this valentines to our growing collection of memories together! Remember we still got many more. We have a contract"
        btnText="FINAL CLICK!!!!"
        sequence="20"
      />
      <Screen
        imageUrl={null}
        bgColor={colors.red}
        textColor={colors.white}
        title="HAPPY VALENTINES BABYYYYY"
        text="'I'LL PICK YOU UP LATER OKAYYYYYY, WEAR SUTTIN NICE ANDDDDD....... I LOVE YOU"
        sequence="21"
        className="screen-21"
      />
    </div>
  );
};

export default App;
