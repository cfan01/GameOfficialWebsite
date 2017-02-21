/*{
   "Available_Field_Options" : ["GBID","註冊手機","註冊入口","註冊時間","暱稱","預設暱稱","人氣指數","會員級別","下月級別","前兩月儲值",
                               "前兩月押分","LV","累積經驗值","目前G幣","開運金","總寶物數量","虛寶卡數量","道具數量","姓名","E-mail",
                               "身分證字號","生日","年齡","轉點總次數","轉出總次數","轉入總次數","轉點總金額","轉出總金額","轉入總金額","轉點手續費",
                               "總儲值次數","總儲值金額NT$","儲值金額NT$_GP","儲值金額NT$_MA","儲值金額NT$_Web","儲值金額NT$_小額","儲值金額NT$_通路卡","儲值金額NT$_IOS","帳號狀態","開始停權時間",
                               "聊天狀態","開始禁言時間","異動說明","最後登入平台","會員位置","最後登入時間","最後登出時間","登入次數","累積登入時間","累積遊戲時間",
                               "最後IP","個人RTP","機率名單","輸贏淨得","總押分","總押分_G幣","總押分_開運金","總得分","最後總得分_G幣","最後總得分_開運金",
                               "總外贈得分","最後總得分","遊戲局數","SLOTS局數","牌桌類局數","某類1Game局數","某類2Game局數","比倍總次數","比倍總得分","JP總次數",
                               "JP總得分","本月押分","本月儲值NT$","本月轉出額","本月轉入額","上月轉出額","上月轉入額","轉點總人數","後台修改G幣","後台修改開運金",
                               "地址","性別"
                             ],
  "Basic_Form_Selected_Field_Options" : ["GBID","暱稱","註冊入口","註冊手機","會員位置","LV","會員級別","目前G幣","開運金","帳號狀態","聊天狀態"],
  "Game_Info_Selected_Field_Options" : ["GBID","暱稱","會員級別","機率名單","個人RTP","總押分","總得分","總外贈得分","JP總得分","最後總得分","輸贏淨得","遊戲局數"],
  "Gift_Info_Selected_Field_Options" : ["GBID","暱稱","會員級別","目前G幣","開運金","總儲值次數","總儲值金額NT$","儲值金額NT$_GP","儲值金額NT$_MA","儲值金額NT$_Web"],
  "Point_Info_Selected_Field_Options" : ["GBID","暱稱","會員級別","目前G幣","轉點總次數","轉出總金額","轉入總金額","轉點手續費"],
  "Login_Info_Selected_Field_Options" : ["GBID","暱稱","會員級別","LV","目前G幣","會員位置","註冊入口","最後登入平台","最後登入時間","登入次數","累積登入時間","累積遊戲時間"],
  "Basic_Form_Nonmove_Options" : ["GBID","暱稱","註冊入口","會員級別","目前G幣"]
}
*/

/* GBID */
var gbid = "<tr>"+
           "  <td style=\"width: 4%\">"+
           "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
           "    <label for=\"myCheckbox\"></label>"+
           "  </td>"+
           "  <td style=\"width: 16%\">GameBarID</td>"+
           "  <td>"+
           "  	 <input type=\"text\" id=\"gbid\" name=\"gbid\"></input>"+
           "  </td>"+
           "</tr>";
/* 註冊手機 */
var registermobile = "<tr>"+
                     "  <td style=\"width: 3%\">"+
                     "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                     "    <label for=\"myCheckbox\"></label>"+
                     "  </td>"+
                     "  <td style=\"width: 10%\">註冊手機</td>"+
                     "  <td>"+
                     "  	 <input type=\"text\" id=\"registermobile\" name=\"registermobile\"></input>"+
                     "  </td>"+
                     "</tr>";
/* 註冊入口 */
var regentry = "<tr>"+
               "   <td style=\"width: 3%\">"+
               "   	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
               "     <label for=\"myCheckbox\"></label>"+
               "   </td>"+
               "   <td style=\"width: 10%\">註冊入口</td>"+
               "   <td>"+
               "      <select id=\"regentry\" name=\"regentry\" style=\"width:10%\">"+
               "        <option value=\"test\">測試用</option>"+
               "        <option value=\"angp\">AnGP</option>"+
               "        <option value=\"anma\">AnMa</option>"+
               "        <option value=\"ios\">IOS</option>"+
               "        <option value=\"web\">WEB</option>"+
               "      </select>"+
               "   </td>"+
               "</tr>";
/* 註冊時間 */
var registertime = "<tr>"+
                   "  <td style=\"width: 3%\">"+
                   "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                   "    <label for=\"myCheckbox\"></label>"+
                   "  </td>"+
                   "  <td style=\"width: 10%\">註冊時間</td>"+
                   "  <td>"+
                   "  	 <input type=\"text\" id=\"fregistertime\" name=\"fregistertime\" style=\"text-align:center;width:25%\"></input>&nbsp;&nbsp;~&nbsp;&nbsp;"+
                   "  	 <input type=\"text\" id=\"tregistertime\" name=\"tregistertime\" style=\"text-align:center;width:25%\">"+
                   "  </td>"+
                   "</tr>";
/* 暱稱 */
var nickname =  "<tr>"+
                "  <td style=\"width: 3%\">"+
                "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                "    <label for=\"myCheckbox\"></label>"+
                "  </td>"+
                "  <td style=\"width: 10%\">暱稱</td>"+
                "  <td>"+
                "  	 <input type=\"text\" id=\"nickname\" name=\"nickname\"></input>"+
                "  </td>"+
                "</tr>";
/* 預設暱稱 */
var defaultnickname = "<tr>"+
                      "  <td style=\"width: 3%\">"+
                      "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                      "    <label for=\"myCheckbox\"></label>"+
                      "  </td>"+
                      "  <td style=\"width: 10%\">預設暱稱</td>"+
                      "  <td>"+
                      "  	 <input type=\"text\" id=\"defaultnickname\" name=\"defaultnickname\"></input>"+
                      "  </td>"+
                      "</tr>";
/* 人氣指數 */
var popularityindex = "<tr>"+
                      "  <td style=\"width: 3%\">"+
                      "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                      "    <label for=\"myCheckbox\"></label>"+
                      "  </td>"+
                      "  <td style=\"width: 10%\">人氣指數</td>"+
                      "  <td>"+
                      "  	 <input type=\"text\" id=\"popularityindex\" name=\"popularityindex\"></input>"+
                      "  </td>"+
                      "</tr>";
/* 會員級別 */
var memberlevel = "<tr>"+
                  "  <td style=\"width: 3%\">"+
                  "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                  "    <label for=\"myCheckbox\"></label>"+
                  "  </td>"+
                  "  <td style=\"width: 10%\">會員級別</td>"+
                  "  <td>"+
                  "     <select id=\"memberlevel\" name=\"memberlevel\" style=\"width:10%\">"+
                  "       <option value=\"normal\">一般</option>"+
                  "       <option value=\"whitediamond\">白鑽</option>"+
                  "       <option value=\"bluediamond\">藍鑽</option>"+
                  "       <option value=\"reddiamond\">紅鑽</option>"+
                  "       <option value=\"goldendiamond\">金鑽</option>"+
                  "     </select>"+
                  "  </td>"+
                  "</tr>";
/* 下月級別 */
var nextmonmemberlevel = "<tr>"+
                         "  <td style=\"width: 3%\">"+
                         "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                         "    <label for=\"myCheckbox\"></label>"+
                         "   </td>"+
                         "   <td style=\"width: 10%\">下月級別</td>"+
                         "   <td>"+
                         "      <select id=\"nextmonmemberlevel\" name=\"nextmonmemberlevel\" style=\"width:10%\">"+
                         "        <option value=\"normal\">一般</option>"+
                         "        <option value=\"whitediamond\">白鑽</option>"+
                         "        <option value=\"bluediamond\">藍鑽</option>"+ 
                         "        <option value=\"reddiamond\">紅鑽</option>"+
                         "        <option value=\"goldendiamond\">金鑽</option>"+
                         "      </select>"+
                         "   </td>"+
                         "</tr>";
/* 前兩月儲值 */
var prev2monthgift = "<tr>"+
                     "  <td style=\"width: 3%\">"+
                     "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                     "    <label for=\"myCheckbox\"></label>"+
                     "  </td>"+
                     "  <td style=\"width: 10%\">前兩月儲值</td>"+
                     "  <td>"+
                     "  	 <input type=\"text\" id=\"prev2monthgift\" name=\"prev2monthgift\"></input>"+
                     "  </td>"+
                     "</tr>";
/* 前兩月押分 */
var prev2monthchargepoints = "<tr>"+
                             "  <td style=\"width: 3%\">"+
                             "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                             "    <label for=\"myCheckbox\"></label>"+
                             "  </td>"+
                             "  <td style=\"width: 10%\">前兩月押分</td>"+
                             "  <td>"+
                             "  	 <input type=\"text\" id=\"prev2monthchargepoints\" name=\"prev2monthchargepoints\"></input>"+
                             "  </td>"+
                             "</tr>";
/* LV */
var lv = "<tr>"+
         "  <td style=\"width: 3%\">"+
         "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
         "    <label for=\"myCheckbox\"></label>"+
         "  </td>"+
         "  <td style=\"width: 10%\">LV</td>"+
         "  <td>"+
         "  	 <input type=\"text\" id=\"lv\" name=\"lv\"></input>"+
         "  </td>"+
         "</tr>";
/* 累積經驗值 */
var accumulatedexperience = "<tr>"+
                            "  <td style=\"width: 3%\">"+
                            "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                            "    <label for=\"myCheckbox\"></label>"+
                            "  </td>"+
                            "  <td style=\"width: 10%\">累積經驗值</td>"+
                            "  <td>"+
                            "  	 <input type=\"text\" id=\"accumulatedexperience\" name=\"accumulatedexperience\"></input>"+
                            "  </td>"+
                            "</tr>";
/* 目前G幣 */
var nowGcurrency = "<tr>"+
                   "  <td style=\"width: 3%\">"+
                   "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                   "    <label for=\"myCheckbox\"></label>"+
                   "  </td>"+
                   "  <td style=\"width: 10%\">目前G幣</td>"+
                   "  <td>"+
                   "  	 <input type=\"text\" id=\"nowGcurrency\" name=\"nowGcurrency\"></input>"+
                   "  </td>"+
                   "</tr>";
/* 開運金 */
var luckymoney = "<tr>"+
                 "  <td style=\"width: 3%\">"+
                 "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                 "    <label for=\"myCheckbox\"></label>"+
                 "  </td>"+
                 "  <td style=\"width: 10%\">開運金</td>"+
                 "  <td>"+
                 "  	 <input type=\"text\" id=\"luckymoney\" name=\"luckymoney\"></input>"+
                 "  </td>"+
                 "</tr>";
/* 總寶物數量 */
var totaltreasures = "<tr>"+
                     "  <td style=\"width: 3%\">"+
                     "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                     "    <label for=\"myCheckbox\"></label>"+
                     "  </td>"+
                     "  <td style=\"width: 10%\">總寶物數量</td>"+
                     "  <td>"+
                     "  	 <input type=\"text\" id=\"totaltreasures\" name=\"totaltreasures\"></input>"+
                     "  </td>"+
                     "</tr>";
/* 虛寶卡數量 */
var totalitems = "<tr>"+
                 "  <td style=\"width: 3%\">"+
                 "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                 "    <label for=\"myCheckbox\"></label>"+
                 "  </td>"+
                 "  <td style=\"width: 10%\">虛寶卡數量</td>"+
                 "  <td>"+
                 "  	 <input type=\"text\" id=\"totalitems\" name=\"totalitems\"></input>"+
                 "  </td>"+ 
                 "</tr>";
/* 道具數量 */
var totalprops = "<tr>"+
                 "  <td style=\"width: 3%\">"+
                 "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                 "    <label for=\"myCheckbox\"></label>"+
                 "  </td>"+
                 "  <td style=\"width: 10%\">道具數量</td>"+
                 "  <td>"+
                 "  	 <input type=\"text\" id=\"totalprops\" name=\"totalprops\"></input>"+
                 "  </td>"+
                 "</tr>";
/* 姓名 */
var name = "<tr>"+
           "  <td style=\"width: 3%\">"+
           "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
           "    <label for=\"myCheckbox\"></label>"+
           "  </td>"+
           "  <td style=\"width: 10%\">姓名</td>"+
           "  <td>"+
           "  	 <input type=\"text\" id=\"name\" name=\"name\"></input>"+
           "  </td>"+
           "</tr>";
/* E-mail */
var email = "<tr>"+
            "  <td style=\"width: 3%\">"+
            "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
            "    <label for=\"myCheckbox\"></label>"+
            "  </td>"+
            "  <td style=\"width: 10%\">E-mail</td>"+
            "  <td>"+
            "  	 <input type=\"text\" id=\"email\" name=\"email\"></input>"+
            "  </td>"+
            "</tr>";
/* 身分證字號 */
var idcard_id = "<tr>"+
                "  <td style=\"width: 3%\">"+
                "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                "    <label for=\"myCheckbox\"></label>"+
                "  </td>"+
                "  <td style=\"width: 10%\">身分證字號</td>"+
                "  <td>"+
                "  	 <input type=\"text\" id=\"idcard_id\" name=\"idcard_id\"></input>"+
                "  </td>"+ 
                "</tr>";
/* 生日 */
var birthday = "<tr>"+
               "  <td style=\"width: 3%\">"+
               "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
               "    <label for=\"myCheckbox\"></label>"+
               "  </td>"+
               "  <td style=\"width: 10%\">生日</td>"+
               "  <td>"+
               "  	 <input type=\"text\" id=\"birthday\" name=\"birthday\"></input>"+
               "  </td>"+
               "</tr>";
/* 年齡 */
var age = "<tr>"+
          "  <td style=\"width: 3%\">"+
          "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
          "    <label for=\"myCheckbox\"></label>"+
          "  </td>"+
          "  <td style=\"width: 10%\">年齡</td>"+
          "  <td>"+
          "  	 <input type=\"text\" id=\"age\" name=\"age\"></input>"+
          "  </td>"+
          "</tr>";
/* 轉點總次數 */
var pointstimes = "<tr>"+
                  "  <td style=\"width: 3%\">"+
                  "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                  "    <label for=\"myCheckbox\"></label>"+
                  "  </td>"+
                  "  <td style=\"width: 10%\">轉點總次數</td>"+
                  "  <td>"+
                  "  	 <input type=\"text\" id=\"pointstimes\" name=\"pointstimes\"></input>"+
                  "  </td>"+
                  "</tr>";
/* 轉出總次數 */
var outstimes = "<tr>"+
                "  <td style=\"width: 3%\">"+
                "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                "    <label for=\"myCheckbox\"></label>"+
                "  </td>"+
                "  <td style=\"width: 10%\">轉出總次數</td>"+
                "  <td>"+
                "  	 <input type=\"text\" id=\"outstimes\" name=\"outstimes\"></input>"+
                "  </td>"+
                "</tr>";
/* 轉入總次數 */
var instimes = "<tr>"+
               "  <td style=\"width: 3%\">"+
               "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
               "    <label for=\"myCheckbox\"></label>"+
               "  </td>"+
               "  <td style=\"width: 10%\">轉入總次數</td>"+
               "  <td>"+
               "  	 <input type=\"text\" id=\"instimes\" name=\"instimes\"></input>"+
               "  </td>"+
               "</tr>";
/* 轉點總金額 */
var pointstotalamount = "<tr>"+
                        "  <td style=\"width: 3%\">"+
                        "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                        "    <label for=\"myCheckbox\"></label>"+
                        "  </td>"+
                        "  <td style=\"width: 10%\">轉點總金額</td>"+
                        "  <td>"+
                        "  	 <input type=\"text\" id=\"pointstotalamount\" name=\"pointstotalamount\"></input>"+
                        "  </td>"+
                        "</tr>";
/* 轉出總金額 */
var outstotalamount = "<tr>"+
                      "  <td style=\"width: 3%\">"+
                      "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                      "    <label for=\"myCheckbox\"></label>"+
                      "  </td>"+
                      "  <td style=\"width: 10%\">轉出總金額</td>"+
                      "  <td>"+
                      "  	 <input type=\"text\" id=\"outstotalamount\" name=\"outstotalamount\"></input>"+
                      "  </td>"+
                      "</tr>";
/* 轉入總金額 */
var instotalamount = "<tr>"+
                     "  <td style=\"width: 3%\">"+
                     "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                     "    <label for=\"myCheckbox\"></label>"+
                     "  </td>"+
                     "  <td style=\"width: 10%\">轉入總金額</td>"+
                     "  <td>"+
                     "  	 <input type=\"text\" id=\"instotalamount\" name=\"instotalamount\"></input>"+
                     "  </td>"+
                     "</tr>";
/* 轉點手續費 */
var pointsfee = "<tr>"+
                "  <td style=\"width: 3%\">"+
                "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                "    <label for=\"myCheckbox\"></label>"+
                "  </td>"+
                "  <td style=\"width: 10%\">轉點手續費</td>"+
                "  <td>"+
                "  	 <input type=\"text\" id=\"pointsfee\" name=\"pointsfee\"></input>"+
                "  </td>"+
                "</tr>";
/* 總儲值次數 */
var totalgifttimes = "<tr>"+
                     "  <td style=\"width: 3%\">"+
                     "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                     "    <label for=\"myCheckbox\"></label>"+
                     "  </td>"+
                     "  <td style=\"width: 10%\">總儲值次數</td>"+
                     "  <td>"+
                     "  	 <input type=\"text\" id=\"totalgifttimes\" name=\"totalgifttimes\"></input>"+
                     "  </td>"+
                     "</tr>";
/* 總儲值金額NT$ */
var totalgiftamounts = "<tr>"+
                       "  <td style=\"width: 3%\">"+
                       "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                       "    <label for=\"myCheckbox\"></label>"+
                       "  </td>"+
                       "  <td style=\"width: 10%\">總儲值金額NT$</td>"+
                       "  <td>"+
                       "  	 <input type=\"text\" id=\"totalgiftamounts\" name=\"totalgiftamounts\"></input>"+
                       "  </td>"+
                       "</tr>";
/* 儲值金額NT$_GP */
var giftamounts_gp = "<tr>"+
                     "  <td style=\"width: 3%\">"+
                     "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                     "    <label for=\"myCheckbox\"></label>"+
                     "  </td>"+
                     "  <td style=\"width: 10%\">儲值金額NT$_GP</td>"+
                     "  <td>"+
                     "  	 <input type=\"text\" id=\"giftamounts_gp\" name=\"giftamounts_gp\"></input>"+
                     "  </td>"+
                     "</tr>";
/* 儲值金額NT$_MA */
var giftamounts_ma = "<tr>"+
                     "  <td style=\"width: 3%\">"+
                     "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                     "    <label for=\"myCheckbox\"></label>"+
                     "  </td>"+
                     "  <td style=\"width: 10%\">儲值金額NT$_MA</td>"+
                     "  <td>"+
                     "  	 <input type=\"text\" id=\"giftamounts_ma\" name=\"giftamounts_ma\"></input>"+
                     "  </td>"+
                     "</tr>";
/* 儲值金額NT$_Web */
var giftamounts_web = "<tr>"+
                      "  <td style=\"width: 3%\">"+
                      "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                      "    <label for=\"myCheckbox\"></label>"+
                      "  </td>"+
                      "  <td style=\"width: 10%\">儲值金額NT$_Web</td>"+
                      "  <td>"+
                      "  	 <input type=\"text\" id=\"giftamounts_web\" name=\"giftamounts_web\"></input>"+
                      "  </td>"+
                      "</tr>";
/* 儲值金額NT$_小額 */
var giftamounts_small = "<tr>"+
                        "  <td style=\"width: 3%\">"+
                        "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                        "    <label for=\"myCheckbox\"></label>"+
                        "  </td>"+
                        "  <td style=\"width: 10%\">儲值金額NT$_小額</td>"+
                        "  <td>"+
                        "  	 <input type=\"text\" id=\"giftamounts_small\" name=\"giftamounts_small\"></input>"+
                        "  </td>"+
                        "</tr>";
/* 儲值金額NT$_通路卡 */
var giftamounts_accesscard = "<tr>"+
                             "  <td style=\"width: 3%\">"+
                             "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                             "    <label for=\"myCheckbox\"></label>"+
                             "  </td>"+
                             "  <td style=\"width: 10%\">儲值金額NT$_通路卡</td>"+
                             "  <td>"+
                             "  	 <input type=\"text\" id=\"giftamounts_accesscard\" name=\"giftamounts_accesscard\"></input>"+
                             "  </td>"+
                             "</tr>";
/* 儲值金額NT$_IOS */
var giftamounts_ios = "<tr>"+
                      "  <td style=\"width: 3%\">"+
                      "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                      "    <label for=\"myCheckbox\"></label>"+
                      "  </td>"+
                      "  <td style=\"width: 10%\">儲值金額NT$_IOS</td>"+
                      "  <td>"+
                      "  	 <input type=\"text\" id=\"giftamounts_ios\" name=\"giftamounts_ios\"></input>"+
                      "  </td>"+
                      "</tr>";
/* 帳號狀態 */
var accountstatus = "<tr>"+
                    "  <td style=\"width: 3%\">"+
                    "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                    "    <label for=\"myCheckbox\"></label>"+
                    "  </td>"+
                    "  <td style=\"width: 10%\">帳號狀態</td>"+
                    "  <td>"+
                    "     <select id=\"accountstatus\" name=\"accountstatus\" style=\"width:10%\">"+
                    "       <option value=\"normal\">正常</option>"+
                    "       <option value=\"gamesuspended\">遊戲停權</option>"+
                    "       <option value=\"fullysuspended\">完全停權</option>"+
                    "     </select>"+
                    "  </td>"+
                    "</tr>";
/* 開始停權時間 */
var startsuspendedtime = "<tr>"+
                         "  <td style=\"width: 3%\">"+
                         "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                         "    <label for=\"myCheckbox\"></label>"+
                         "  </td>"+
                         "  <td style=\"width: 10%\">開始停權時間</td>"+
                         "  <td>"+
                         "  	 <input type=\"text\" id=\"fstartsuspendedtime\" name=\"fstartsuspendedtime\" style=\"text-align:center;width:25%\"></input>&nbsp;&nbsp;~&nbsp;&nbsp;"+
                         "  	 <input type=\"text\" id=\"tstartsuspendedtime\" name=\"tstartsuspendedtime\" style=\"text-align:center;width:25%\">"+
                         "  </td>"+
                         "</tr>";
/* 聊天狀態 */
var chatstatus = "<tr>"+
                 "  <td style=\"width: 3%\">"+
                 "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                 "    <label for=\"myCheckbox\"></label>"+
                 "  </td>"+
                 "  <td style=\"width: 10%\">聊天狀態</td>"+
                 "  <td>"+
                 "     <select id=\"chatstatus\" name=\"chatstatus\" style=\"width:10%\">"+
                 "       <option value=\"normal\">正常</option>"+
                 "       <option value=\"gag\">禁言</option>"+
                 "     </select>"+
                 "  </td>"+
                 "</tr>";
/* 開始禁言時間 */
var startgagtime = "<tr>"+
                   "  <td style=\"width: 3%\">"+
                   "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                   "    <label for=\"myCheckbox\"></label>"+
                   "  </td>"+
                   "  <td style=\"width: 10%\">開始禁言時間</td>"+
                   "  <td>"+
                   "  	 <input type=\"text\" id=\"fstartgagtime\" name=\"fstartgagtime\" style=\"text-align:center;width:25%\"></input>&nbsp;&nbsp;~&nbsp;&nbsp;"+
                   "  	 <input type=\"text\" id=\"tstartgagtime\" name=\"tstartgagtime\" style=\"text-align:center;width:25%\">"+
                   "  </td>"+
                   "</tr>";
/* 異動說明 */
var alertdesc = "<tr>"+
                "  <td style=\"width: 3%\">"+
                "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                "    <label for=\"myCheckbox\"></label>"+
                "  </td>"+
                "  <td style=\"width: 10%\">異動說明</td>"+
                "  <td>"+
                "  	 <input type=\"text\" id=\"alertdesc\" name=\"alertdesc\"></input>"+
                "  </td>"+
                "</tr>";
/* 最後登入平台 */
var lastloginplatform = "<tr>"+
                        "  <td style=\"width: 3%\">"+
                        "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                        "    <label for=\"myCheckbox\"></label>"+
                        "  </td>"+
                        "  <td style=\"width: 10%\">最後登入平台</td>"+
                        "  <td>"+
                        "     <select id=\"lastloginplatform\" name=\"lastloginplatform\" style=\"width:10%\">"+
                        "       <option value=\"test\">測試用</option>"+
                        "       <option value=\"angp\">AnGP</option>"+
                        "       <option value=\"anma\">AnMa</option>"+
                        "       <option value=\"ios\">IOS</option>"+
                        "       <option value=\"web\">WEB</option>"+
                        "     </select>"+
                        "  </td>"+
                        "</tr>";
/* 會員位置 */
var memberposition =  "<tr>"+
                      "  <td style=\"width: 3%\">"+
                      "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                      "    <label for=\"myCheckbox\"></label>"+
                      "  </td>"+
                      "  <td style=\"width: 10%\">會員位置</td>"+
                      "  <td>"+
                      "     <select id=\"memberposition\" name=\"memberposition\" style=\"width:10%\">"+
                      "       <option value=\"offline\">離線</option>"+
                      "       <option value=\"officewebsite\">官網</option>"+
                      "       <option value=\"lobby\">大廳</option>"+
                      "       <option value=\"game_platform\">遊戲名_選台頁</option>"+
                      "       <option value=\"game_machine\">遊戲名_機台編號</option>"+
                      "     </select>"+
                      "  </td>"+
                      "</tr>";
/* 最後登入時間 */
var lastlogintime = "<tr>"+
                    "  <td style=\"width: 3%\">"+
                    "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                    "    <label for=\"myCheckbox\"></label>"+
                    "  </td>"+
                    "  <td style=\"width: 10%\">最後登入時間</td>"+
                    "  <td>"+
                    "  	 <input type=\"text\" id=\"flastlogintime\" name=\"flastlogintime\" style=\"text-align:center;width:25%\"></input>&nbsp;&nbsp;~&nbsp;&nbsp;"+
                    "  	 <input type=\"text\" id=\"tlastlogintime\" name=\"tlastlogintime\" style=\"text-align:center;width:25%\">"+
                    "  </td>"+
                    "</tr>";
/* 最後登出時間 */
var lastlogouttime = "<tr>"+
                     "  <td style=\"width: 3%\">"+
                     "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                     "    <label for=\"myCheckbox\"></label>"+
                     "  </td>"+
                     "  <td style=\"width: 10%\">最後登出時間</td>"+
                     "  <td>"+
                     "  	 <input type=\"text\" id=\"flastlogouttime\" name=\"flastlogouttime\" style=\"text-align:center;width:25%\"></input>&nbsp;&nbsp;~&nbsp;&nbsp;"+
                     "  	 <input type=\"text\" id=\"tlastlogouttime\" name=\"tlastlogouttime\" style=\"text-align:center;width:25%\">"+
                     "  </td>"+
                     "</tr>";
/* 登入次數 */
var logintimes = "<tr>"+
                 "  <td style=\"width: 3%\">"+
                 "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                 "    <label for=\"myCheckbox\"></label>"+
                 "  </td>"+
                 "  <td style=\"width: 10%\">登入次數</td>"+
                 "  <td>"+
                 "  	 <input type=\"text\" id=\"logintimes\" name=\"logintimes\"></input>"+
                 "  </td>"+
                 "</tr>";
/* 累積登入時間 */
var accumulatedlogintime = "<tr>"+
                           "  <td style=\"width: 3%\">"+
                           "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                           "    <label for=\"myCheckbox\"></label>"+
                           "  </td>"+
                           "  <td style=\"width: 10%\">累積登入時間</td>"+
                           "  <td>"+
                           "  	 <input type=\"text\" id=\"faccumulatedlogintime\" name=\"faccumulatedlogintime\" style=\"text-align:center;width:25%\"></input>&nbsp;&nbsp;~&nbsp;&nbsp;"+
                           "  	 <input type=\"text\" id=\"taccumulatedlogintime\" name=\"taccumulatedlogintime\" style=\"text-align:center;width:25%\">"+
                           "  </td>"+
                           "</tr>";
/* 累積遊戲時間 */
var accumulatedgametime = "<tr>"+
                          "  <td style=\"width: 3%\">"+
                          "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                          "    <label for=\"myCheckbox\"></label>"+
                          "  </td>"+
                          "  <td style=\"width: 10%\">累積遊戲時間</td>"+
                          "  <td>"+
                          "  	 <input type=\"text\" id=\"faccumulatedgametime\" name=\"faccumulatedgametime\" style=\"text-align:center;width:25%\"></input>&nbsp;&nbsp;~&nbsp;&nbsp;"+
                          "  	 <input type=\"text\" id=\"taccumulatedgametime\" name=\"taccumulatedgametime\" style=\"text-align:center;width:25%\">"+
                          "  </td>"+
                          "</tr>";
/* 最後IP */
var lastip = "<tr>"+
             "  <td style=\"width: 3%\">"+
             "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
             "    <label for=\"myCheckbox\"></label>"+
             "  </td>"+
             "  <td style=\"width: 10%\">最後IP</td>"+
             "  <td>"+
             "  	 <input type=\"text\" id=\"lastip\" name=\"lastip\"></input>"+
             "  </td>"+
             "</tr>";
/* 個人RTP */
var personalrip = "<tr>"+
                  "  <td style=\"width: 3%\">"+
                  "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                  "    <label for=\"myCheckbox\"></label>"+
                  "  </td>"+
                  "  <td style=\"width: 10%\">個人RTP</td>"+
                  "  <td>"+
                  "  	 <input type=\"text\" id=\"personalrip\" name=\"personalrip\"></input>"+
                  "  </td>"+
                  "</tr>";
/* 機率名單 */
var probabilitylists = "<tr>"+
                       "  <td style=\"width: 3%\">"+
                       "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                       "    <label for=\"myCheckbox\"></label>"+
                       "  </td>"+
                       "  <td style=\"width: 10%\">機率名單</td>"+
                       "  <td>"+
                       "  	 <input type=\"text\" id=\"probabilitylists\" name=\"probabilitylists\"></input>"+
                       "  </td>"+
                       "</tr>";
/* 輸贏淨得 */
var winlosenetgain = "<tr>"+
                     "  <td style=\"width: 3%\">"+
                     "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                     "    <label for=\"myCheckbox\"></label>"+
                     "  </td>"+
                     "  <td style=\"width: 10%\">輸贏淨得</td>"+
                     "  <td>"+
                     "  	 <input type=\"text\" id=\"winlosenetgain\" name=\"winlosenetgain\"></input>"+
                     "  </td>"+
                     "</tr>";
/* 總押分 */
var totalchargepoints = "<tr>"+
                        "  <td style=\"width: 3%\">"+
                        "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                        "    <label for=\"myCheckbox\"></label>"+
                        "  </td>"+
                        "  <td style=\"width: 10%\">總押分</td>"+
                        "  <td>"+
                        "  	 <input type=\"text\" id=\"totalchargepoints\" name=\"totalchargepoints\"></input>"+
                        "  </td>"+
                        "</tr>";
/* 總押分_G幣 */
var totalchargepoints_Gcurrency = "<tr>"+
                                  "  <td style=\"width: 3%\">"+
                                  "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                                  "    <label for=\"myCheckbox\"></label>"+
                                  "  </td>"+
                                  "  <td style=\"width: 10%\">總押分_G幣</td>"+
                                  "  <td>"+
                                  "  	 <input type=\"text\" id=\"totalchargepoints_Gcurrency\" name=\"totalchargepoints_Gcurrency\"></input>"+
                                  "  </td>"+
                                  "</tr>";
/* 總押分_開運金 */
var totalchargepoints_luckymoney = "<tr>"+
                                   "  <td style=\"width: 3%\">"+
                                   "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                                   "    <label for=\"myCheckbox\"></label>"+
                                   "  </td>"+
                                   "  <td style=\"width: 10%\">總押分_開運金</td>"+
                                   "  <td>"+
                                   "  	 <input type=\"text\" id=\"totalchargepoints_luckymoney\" name=\"totalchargepoints_luckymoney\"></input>"+
                                   "  </td>"+
                                   "</tr>";
/* 總得分 */
var totalscore = "<tr>"+
                 "  <td style=\"width: 3%\">"+
                 "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                 "    <label for=\"myCheckbox\"></label>"+
                 "  </td>"+
                 "  <td style=\"width: 10%\">總得分</td>"+
                 "  <td>"+
                 "  	 <input type=\"text\" id=\"totalscore\" name=\"totalscore\"></input>"+
                 "  </td>"+
                 "</tr>";
/* 最後總得分_G幣 */
var finaltotalscore_Gcurrency = "<tr>"+
                                "  <td style=\"width: 3%\">"+
                                "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                                "    <label for=\"myCheckbox\"></label>"+
                                "  </td>"+
                                "  <td style=\"width: 10%\">最後總得分_G幣</td>"+
                                "  <td>"+
                                "  	 <input type=\"text\" id=\"finaltotalscore_Gcurrency\" name=\"finaltotalscore_Gcurrency\"></input>"+
                                "  </td>"+
                                "</tr>";
/* 最後總得分_開運金 */
var finaltotalscore_luckymoney = "<tr>"+
                                 "  <td style=\"width: 3%\">"+
                                 "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                                 "    <label for=\"myCheckbox\"></label>"+
                                 "  </td>"+
                                 "  <td style=\"width: 10%\">最後總得分_開運金</td>"+
                                 "  <td>"+
                                 "  	 <input type=\"text\" id=\"finaltotalscore_luckymoney\" name=\"finaltotalscore_luckymoney\"></input>"+
                                 "  </td>"+
                                 "</tr>";
/* 總外贈得分 */
var totalscoreoutsidegifts = "<tr>"+
                             "  <td style=\"width: 3%\">"+
                             "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                             "    <label for=\"myCheckbox\"></label>"+
                             "  </td>"+
                             "  <td style=\"width: 10%\">總外贈得分</td>"+
                             "  <td>"+
                             "  	 <input type=\"text\" id=\"totalscoreoutsidegifts\" name=\"totalscoreoutsidegifts\"></input>"+
                             "  </td>"+
                             "</tr>";
/* 最後總得分 */
var finaltotalscore = "<tr>"+
                      "  <td style=\"width: 3%\">"+
                      "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                      "    <label for=\"myCheckbox\"></label>"+
                      "  </td>"+
                      "  <td style=\"width: 10%\">最後總得分</td>"+
                      "  <td>"+
                      "  	 <input type=\"text\" id=\"finaltotalscore\" name=\"finaltotalscore\"></input>"+
                      "  </td>"+
                      "</tr>";
/* 遊戲局數 */
var gameboardnumber = "<tr>"+
                      "  <td style=\"width: 3%\">"+
                      "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                      "    <label for=\"myCheckbox\"></label>"+
                      "  </td>"+
                      "  <td style=\"width: 10%\">遊戲局數</td>"+
                      "  <td>"+
                      "  	 <input type=\"text\" id=\"gameboardnumber\" name=\"gameboardnumber\"></input>"+
                      "  </td>"+
                      "</tr>";
/* SLOTS局數 */
var slotsboardnumber = "<tr>"+
                       "  <td style=\"width: 3%\">"+
                       "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                       "    <label for=\"myCheckbox\"></label>"+
                       "  </td>"+
                       "  <td style=\"width: 10%\">SLOTS局數</td>"+
                       "  <td>"+
                       "  	 <input type=\"text\" id=\"slotsboardnumber\" name=\"slotsboardnumber\"></input>"+
                       "  </td>"+
                       "</tr>";
/* 牌桌類局數 */
var tableclassboardnumber = "<tr>"+
                            "  <td style=\"width: 3%\">"+
                            "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                            "    <label for=\"myCheckbox\"></label>"+
                            "  </td>"+
                            "  <td style=\"width: 10%\">牌桌類局數</td>"+
                            "  <td>"+
                            "  	 <input type=\"text\" id=\"tableclassboardnumber\" name=\"tableclassboardnumber\"></input>"+
                            "  </td>"+
                            "</tr>";
/* 某類1Game局數 */
var someclass1gameboardnumber = "<tr>"+
                                "  <td style=\"width: 3%\">"+
                                "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                                "    <label for=\"myCheckbox\"></label>"+
                                "  </td>"+
                                "  <td style=\"width: 10%\">某類1Game局數</td>"+
                                "  <td>"+
                                "  	 <input type=\"text\" id=\"someclass1gameboardnumber\" name=\"someclass1gameboardnumber\"></input>"+
                                "  </td>"+
                                "</tr>";
/* 某類2Game局數 */
var someclass2gameboardnumber = "<tr>"+
                                "  <td style=\"width: 3%\">"+
                                "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                                "    <label for=\"myCheckbox\"></label>"+
                                "  </td>"+
                                "  <td style=\"width: 10%\">某類2Game局數</td>"+
                                "  <td>"+
                                "  	 <input type=\"text\" id=\"someclass2gameboardnumber\" name=\"someclass2gameboardnumber\"></input>"+
                                "  </td>"+
                                "</tr>";
/* 比倍總次數 */
var totaltimesmultiple = "<tr>"+
                         "  <td style=\"width: 3%\">"+
                         "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                         "    <label for=\"myCheckbox\"></label>"+
                         "  </td>"+
                         "  <td style=\"width: 10%\">比倍總次數</td>"+
                         "  <td>"+
                         "  	 <input type=\"text\" id=\"totaltimesmultiple\" name=\"totaltimesmultiple\"></input>"+
                         "  </td>"+
                         "</tr>";
/* 比倍總得分 */
var totalscoremultiple = "<tr>"+
                         "  <td style=\"width: 3%\">"+
                         "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                         "    <label for=\"myCheckbox\"></label>"+
                         "  </td>"+
                         "  <td style=\"width: 10%\">比倍總得分</td>"+
                         "  <td>"+
                         "  	 <input type=\"text\" id=\"totalscoremultiple\" name=\"totalscoremultiple\"></input>"+
                         "  </td>"+
                         "</tr>";
/* JP總次數 */
var totaltimesjp = "<tr>"+
                   "  <td style=\"width: 3%\">"+
                   "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                   "    <label for=\"myCheckbox\"></label>"+
                   "  </td>"+
                   "  <td style=\"width: 10%\">JP總次數</td>"+
                   "  <td>"+
                   "  	 <input type=\"text\" id=\"totaltimesjp\" name=\"totaltimesjp\"></input>"+
                   "  </td>"+
                   "</tr>";
/* JP總得分 */
var totalscorejp = "<tr>"+
                   "  <td style=\"width: 3%\">"+
                   "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                   "    <label for=\"myCheckbox\"></label>"+
                   "  </td>"+
                   "  <td style=\"width: 10%\">JP總得分</td>"+
                   "  <td>"+
                   "  	 <input type=\"text\" id=\"totalscorejp\" name=\"totalscorejp\"></input>"+
                   "  </td>"+
                   "</tr>";
/* 本月押分 */
var chargepointsthismonth = "<tr>"+
                            "  <td style=\"width: 3%\">"+
                            "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                            "    <label for=\"myCheckbox\"></label>"+
                            "  </td>"+
                            "  <td style=\"width: 10%\">本月押分</td>"+
                            "  <td>"+
                            "  	 <input type=\"text\" id=\"chargepointsthismonth\" name=\"chargepointsthismonth\"></input>"+
                            "  </td>"+
                            "</tr>";
/* 本月儲值NT$ */
var giftthismonth = "<tr>"+
                    "  <td style=\"width: 3%\">"+
                    "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                    "    <label for=\"myCheckbox\"></label>"+
                    "  </td>"+
                    "  <td style=\"width: 10%\">本月儲值NT$</td>"+
                    "  <td>"+
                    "  	 <input type=\"text\" id=\"giftthismonth\" name=\"giftthismonth\"></input>"+
                    "  </td>"+
                    "</tr>";
/* 本月轉出額 */
var outamountthismonth = "<tr>"+
                         "  <td style=\"width: 3%\">"+
                         "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                         "    <label for=\"myCheckbox\"></label>"+
                         "  </td>"+
                         "  <td style=\"width: 10%\">本月轉出額</td>"+
                         "  <td>"+
                         "  	 <input type=\"text\" id=\"outamountthismonth\" name=\"outamountthismonth\"></input>"+
                         "  </td>"+
                         "</tr>";
/* 本月轉入額 */
var inamountthismonth = "<tr>"+
                        "  <td style=\"width: 3%\">"+
                        "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                        "    <label for=\"myCheckbox\"></label>"+
                        "  </td>"+
                        "  <td style=\"width: 10%\">本月轉入額</td>"+
                        "  <td>"+
                        "  	 <input type=\"text\" id=\"inamountthismonth\" name=\"inamountthismonth\"></input>"+
                        "  </td>"+
                        "</tr>";
/* 上月轉出額 */
var outamountlastmonth = "<tr>"+
                         "  <td style=\"width: 3%\">"+
                         "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                         "    <label for=\"myCheckbox\"></label>"+
                         "  </td>"+
                         "  <td style=\"width: 10%\">上月轉出額</td>"+
                         "  <td>"+
                         "  	 <input type=\"text\" id=\"outamountlastmonth\" name=\"outamountlastmonth\"></input>"+
                         "  </td>"+
                         "</tr>";
/* 上月轉入額 */
var inamountlastmonth = "<tr>"+
                        "  <td style=\"width: 3%\">"+
                        "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                        "    <label for=\"myCheckbox\"></label>"+
                        "  </td>"+
                        "  <td style=\"width: 10%\">上月轉入額</td>"+
                        "  <td>"+
                        "  	 <input type=\"text\" id=\"inamountlastmonth\" name=\"inamountlastmonth\"></input>"+
                        "  </td>"+
                        "</tr>";
/* 轉點總人數 */
var totalpeoplepoints = "<tr>"+
                        "  <td style=\"width: 3%\">"+
                        "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                        "    <label for=\"myCheckbox\"></label>"+
                        "  </td>"+
                        "  <td style=\"width: 10%\">轉點總人數</td>"+
                        "  <td>"+
                        "  	 <input type=\"text\" id=\"totalpeoplepoints\" name=\"totalpeoplepoints\"></input>"+
                        "  </td>"+
                        "</tr>";
/* 後台修改G幣 */
var backendmodifyGcurrency = "<tr>"+
                             "  <td style=\"width: 3%\">"+
                             "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                             "    <label for=\"myCheckbox\"></label>"+
                             "  </td>"+
                             "  <td style=\"width: 10%\">後台修改G幣</td>"+
                             "  <td>"+
                             "  	 <input type=\"text\" id=\"backendmodifyGcurrency\" name=\"backendmodifyGcurrency\"></input>"+
                             "  </td>"+
                             "</tr>";
/* 後台修改開運金 */
var backendmodifyluckymoney = "<tr>"+
                              "  <td style=\"width: 3%\">"+
                              "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
                              "    <label for=\"myCheckbox\"></label>"+
                              "  </td>"+
                              "  <td style=\"width: 10%\">後台修改開運金</td>"+
                              "  <td>"+
                              "  	 <input type=\"text\" id=\"backendmodifyluckymoney\" name=\"backendmodifyluckymoney\"></input>"+
                              "  </td>"+
                              "</tr>";
/* 地址 */
var address = "<tr>"+
              "  <td style=\"width: 3%\">"+
              "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
              "    <label for=\"myCheckbox\"></label>"+
              "  </td>"+
              "  <td style=\"width: 10%\">地址</td>"+
              "  <td>"+
              "  	 <input type=\"text\" id=\"address\" name=\"address\"></input>"+
              "  </td>"+
              "</tr>";
/* 性別 */
var sex = "<tr>"+
          "  <td style=\"width: 3%\">"+
          "  	<input type=\"checkbox\" name=\"myCheckbox\" id=\"myCheckbox\" class=\"filled-in\"></input>"+
          "    <label for=\"myCheckbox\"></label>"+
          "  </td>"+
          "  <td style=\"width: 10%\">性別</td>"+
          "  <td>"+
          "  	 <input type=\"text\" id=\"sex\" name=\"sex\"></input>"+
          "  </td>"+
          "</tr>";

var All_Field_Options = [{"gbid":gbid},
                         {"registermobile":registermobile},
                         {"regentry":regentry},
                         {"registertime":registertime},
                         {"nickname":nickname},
                         {"defaultnickname":defaultnickname},
                         {"popularityindex":popularityindex},
                         {"memberlevel":memberlevel},
                         {"nextmonmemberlevel":nextmonmemberlevel},
                         {"prev2monthgift":prev2monthgift},
                         {"prev2monthchargepoints":prev2monthchargepoints},
                         {"lv":lv},
                         {"accumulatedexperience":accumulatedexperience},
                         {"nowGcurrency":nowGcurrency},
                         {"luckymoney":luckymoney},
                         {"totaltreasures":totaltreasures},
                         {"totalitems":totalitems},
                         {"totalprops":totalprops},
                         {"name":name},
                         {"email":email},
                         {"idcard_id":idcard_id},
                         {"birthday":birthday},
                         {"age":age},
                         {"pointstimes":pointstimes},
                         {"outstimes":outstimes},
                         {"instimes":instimes},
                         {"pointstotalamount":pointstotalamount},
                         {"outstotalamount":outstotalamount},
                         {"instotalamount":instotalamount},
                         {"pointsfee":pointsfee},
                         {"totalgifttimes":totalgifttimes},
                         {"totalgiftamounts":totalgiftamounts},
                         {"giftamounts_gp":giftamounts_gp},
                         {"giftamounts_ma":giftamounts_ma},
                         {"giftamounts_web":giftamounts_web},
                         {"giftamounts_small":giftamounts_small},
                         {"giftamounts_accesscard":giftamounts_accesscard},
                         {"giftamounts_ios":giftamounts_ios},
                         {"accountstatus":accountstatus},
                         {"startsuspendedtime":startsuspendedtime},
                         {"chatstatus":chatstatus},
                         {"startgagtime":startgagtime},
                         {"alertdesc":alertdesc},
                         {"lastloginplatform":lastloginplatform},
                         {"memberposition":memberposition},
                         {"lastlogintime":lastlogintime},
                         {"lastlogouttime":lastlogouttime},
                         {"logintimes":logintimes},
                         {"accumulatedlogintime":accumulatedlogintime},
                         {"accumulatedgametime":accumulatedgametime},
                         {"lastip":lastip},
                         {"personalrip":personalrip},
                         {"probabilitylists":probabilitylists},
                         {"winlosenetgain":winlosenetgain},
                         {"totalchargepoints":totalchargepoints},
                         {"totalchargepoints_Gcurrency":totalchargepoints_Gcurrency},
                         {"totalchargepoints_luckymoney":totalchargepoints_luckymoney},
                         {"totalscore":totalscore},
                         {"finaltotalscore_Gcurrency":finaltotalscore_Gcurrency},
                         {"finaltotalscore_luckymoney":finaltotalscore_luckymoney},
                         {"totalscoreoutsidegifts":totalscoreoutsidegifts},
                         {"finaltotalscore":finaltotalscore},
                         {"gameboardnumber":gameboardnumber},
                         {"slotsboardnumber":slotsboardnumber},
                         {"tableclassboardnumber":tableclassboardnumber},
                         {"someclass1gameboardnumber":someclass1gameboardnumber},
                         {"someclass2gameboardnumber":someclass2gameboardnumber},
                         {"totaltimesmultiple":totaltimesmultiple},
                         {"totalscoremultiple":totalscoremultiple},
                         {"totaltimesjp":totaltimesjp},
                         {"totalscorejp":totalscorejp},
                         {"chargepointsthismonth":chargepointsthismonth},
                         {"giftthismonth":giftthismonth},
                         {"outamountthismonth":outamountthismonth},
                         {"inamountthismonth":inamountthismonth},
                         {"outamountlastmonth":outamountlastmonth},
                         {"inamountlastmonth":inamountlastmonth},
                         {"totalpeoplepoints":totalpeoplepoints},
                         {"backendmodifyGcurrency":backendmodifyGcurrency},
                         {"backendmodifyluckymoney":backendmodifyluckymoney},
                         {"address":address},
                         {"sex":sex}
                        ];
/*
$.each(All_Field_Options, function(i,v) {
  //alert(JSON.stringify(v));
});
*/

function genFilterLists(obj)
{
	var s="<table id=\"filterConditionModal\" class=\"bordered\" border=\"1\" cellpadding=\"0\" cellspacing=\"0\" style=\"padding-left:20px; width: 100%;\" bgcolor=\"#ffffff\">\n";
  //alert('genFilterLists => '+JSON.stringify(obj));
  $('#filterLists').empty();
	$.each(obj, function(i,v) {
	  $.each(All_Field_Options, function(j,val) {
		  if(v[Object.keys(v)[0]]==Object.keys(val)[0])
		  {
		  	//alert(JSON.stringify(val[Object.keys(val)[0]]));
		  	s+=val[Object.keys(val)[0]];
		  }
		});
	});
  s+="</table>\n";
  s+="<script>\n";
  s+="var opt=\n";
  s+="{\n";
  s+="  dateFormat: 'yy/mm/dd',\n";
	s+="  showSecond: true,\n";
  s+="  timeFormat: 'HH:mm:ss'\n";
  s+="};\n";

	$.each(obj, function(i,v) {
		  if(v[Object.keys(v)[0]]=='registertime')
		  {
        s+="$('#fregistertime').datetimepicker(opt);\n";
        s+="$('#tregistertime').datetimepicker(opt);\n";
		  }
		  if(v[Object.keys(v)[0]]=='startsuspendedtime')
		  {
        s+="$('#fstartsuspendedtime').datetimepicker(opt);\n";
        s+="$('#tstartsuspendedtime').datetimepicker(opt);\n";
		  }
		  if(v[Object.keys(v)[0]]=='startgagtime')
		  {
        s+="$('#fstartgagtime').datetimepicker(opt);\n";
        s+="$('#tstartgagtime').datetimepicker(opt);\n";
		  }
		  if(v[Object.keys(v)[0]]=='lastlogintime')
		  {
        s+="$('#flastlogintime').datetimepicker(opt);\n";
        s+="$('#tlastlogintime').datetimepicker(opt);\n";
		  }
		  if(v[Object.keys(v)[0]]=='lastlogouttime')
		  {
        s+="$('#flastlogouttime').datetimepicker(opt);\n";
        s+="$('#tlastlogouttime').datetimepicker(opt);\n";
		  }
		  if(v[Object.keys(v)[0]]=='accumulatedlogintime')
		  {
        s+="$('#faccumulatedlogintime').datetimepicker(opt);\n";
        s+="$('#taccumulatedlogintime').datetimepicker(opt);\n";
		  }
		  if(v[Object.keys(v)[0]]=='accumulatedgametime')
		  {
        s+="$('#faccumulatedgametime').datetimepicker(opt);\n";
        s+="$('#taccumulatedgametime').datetimepicker(opt);\n";
		  }
  });
  s+="</script>\n";

	//alert('genFilterLists s = '+s);
	$('#filterLists').html(s);
}
