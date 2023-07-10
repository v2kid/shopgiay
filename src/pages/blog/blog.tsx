import Header from 'components/Header'
import PostList from './components/PostList'

// import '../components/style.css'
import Related from './components/Related/Related'

export default function Blogshow() {
  return (
   <div className="blogoverviewpage_BlogOverviewPage_1mf6e">
  <div className="blogoverviewpage_Body_fWoUo">
    <Header />
<div className="blogoverviewpage_LargeEntry_2E3rt">
  <div className="blogoverviewpage_HeadingImage_2e1Tr" style={{backgroundImage: 'url("undefined")'}} />
  <div className="fade_FadeContainer_1JDI3 fade_Bottom_1NXAh">
    <div className="fade_Fade_1keus" style={{background: 'linear-gradient(rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.733) 85%, rgb(0, 0, 0) 95%)'}} />
  </div>
  <div className="blogoverviewpage_BottomFade_2AvsW" />
  <div className="blogoverviewpage_FeaturedContent_3x-xx">
    <div className="blogoverviewpage_Tag_1JseK">Featured Post</div>
    <div className="blogoverviewpage_Date_37cbM">June 2, 2023</div>
    <div className="blogoverviewpage_Title_3QQKY">Dota Plus Update — Summer 2023</div>
    <a className="blogoverviewpage_FeaturedLink_SffNe" href="https://www.dota2.com/newsentry/3718329360979838399">Read More<img src="./new_files/arrow_left.png" className="blogoverviewpage_ForwardArrow_343-b" /></a>
  </div>
</div>
<div className="blogoverviewpage_TabContainer_3Abu7">
  <div className="blogoverviewpage_TabsLeft_2hM8T">
    <a className="blogoverviewpage_Tab_1ZGUM blogoverviewpage_Active_2QA0p" href="https://www.dota2.com/news">News</a><a className="blogoverviewpage_Tab_1ZGUM" href="https://www.dota2.com/news/updates">Updates</a>
  </div>
</div>
<div className="blogoverviewpage_BottomSection_1rCwx">
   {/* postlis */}
  <div className="blogoverviewpage_SubEntries_3hyKA">
    <a className="blogcapsule_BlogCapsule_3OBoG" href="https://www.dota2.com/newsentry/3718329360979838399"><div className="blogcapsule_Entry_2P4kN" style={{backgroundImage: 'url("https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/3703047/811316b69855539f634a139f4f67c1c1b596bb98.png")'}}>
        <div className="fade_FadeContainer_1JDI3 fade_Bottom_1NXAh">
          <div className="fade_Fade_1keus"  />
        </div>
        <div className="blogcapsule_Desc_471NM">
          As seasons go, spring doesn’t have much going for it. It’s wet, there’s too many insects, idiots
          are all over the place skipping through parks and falling in love.
        </div>
        
        <div className="blogcapsule_Title_39UGs">Dota Plus Update — Summer 2023</div>
        <div className="blogcapsule_Date_3kp_O">June 2, 2023</div>
      </div></a>
      <PostList />
      <Related />
  </div>
  {/* end postlis */}

</div>
  </div>
</div>

  )
}
