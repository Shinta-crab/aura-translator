class HomeController < ApplicationController
  def index
    # 仮データ（後でDBから取得するように変更予定）
    @recent_abilities = [
      { name: "ミト", title: "無窮なる養育の鎖", type: "具現化系" },
      { name: "ジン", title: "果てなき養育の檻", type: "操作系" }
    ]
  end
end
