---
tag: B9SYHH2F7V
kind: problem
type: answer
answer: "1.5"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: zh
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0001.parquet#row=28
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Alice 和 Bob 組隊玩一場遊戲。在遊戲開始時,他們兩人會被丟到一台列車上的兩個位置,列車總長為 $1$ 公里。列車是封閉且全黑的,所以除非他們在車頭或車尾,否則他們不會知道自己的位置,他們也無從知道隊友的位置。遊戲配給兩人各一台儀器,儀器的左半邊會顯示:
- 持有人目前面向什麼方向(所以他/她可以選擇往車頭或車尾移動);
- 持有人目前已經移動的總距離;
- 持有人目前是否碰到車頭;
- 持有人目前是否碰到車尾。
儀器的右半邊,則顯示隊友的儀器左半邊所呈現的資訊。遊戲會在兩人遇到彼此(雙方位置重合)的瞬間結束。
假設 Alice 和 Bob 在遊戲開始前先被充分告知列車的狀態以及儀器的所有功能,且可以先共同討論他們的策略。試求最小的實數 $x$, 讓 Alice 和 Bob 存在一套策略,使得不論遊戲開始時兩人被放到什麼位置,他們都能夠保證在遊戲結束時,兩人的移動距離和不超過 $x$ 公里。
