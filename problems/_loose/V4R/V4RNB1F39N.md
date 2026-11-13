---
tag: V4RNB1F39N
kind: problem
type: answer
answer: "4024"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: zh
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0000.parquet#row=84
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
設有一個 $2013 \times 2013$ 的棋盤, 其格線的方向為南北/東西向。在每一個方格內填入一個朝東或朝南的箭頭。每一分鐘內, 對所有的箭頭 $A$, 如果 $A$ 指向相鄰的某方格, 且該方格中的箭頭 $B$ 的方向與 $A$ 不同, 則下一分鐘將 $A$ 換成另一個方向的箭頭 (如果 $A$ 原本朝南則換成朝東, 如果 $A$ 原本朝東則換成朝南); 否則箭頭 $A$ 不動。所有這樣的變換在每一分鐘同時執行。
試證：在有限時間之後，所有的箭頭都不能再變換方向。並求出還能改變至少一個箭頭方向的最長可能時間。
