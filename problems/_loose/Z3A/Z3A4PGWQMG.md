---
tag: Z3A4PGWQMG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: zh
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0000.parquet#row=230
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
有 $n$ 座島, 其中 $n \ge 3$. 一間渡輪公司在其中若干對島嶼間架設航線, 使得當我們將這些島嶼分成非空的兩群時, 總是可以從兩組中各找出一座島, 使得這兩座島之間有航線。每年年底, 公司將會挑選有航線相連的島 $X$ 和 $Y$, 並關閉其間的航線。同時, 對於所有其他島嶼 $A$, 若 $A$ 和 $X$ 有航線但和 $Y$ 沒有航線, 則公司將增設 $A$ 和 $Y$ 之間的航線; 反之, 若 $A$ 和 $Y$ 有航線但和 $X$ 沒有航線, 則公司將增設 $A$ 和 $X$ 之間的航線。
對於兩群島 $A$ 和 $B$, 若 $A \in A$ 且 $B \in B$, 則我們稱連結 $A$ 和 $B$ 的航線連接了 $A$ 和 $B$. 假設我們知道, 在任何時間點, 若我們將這些島嶼分成非空的兩群, 則公司必然會在若干年內關閉一條連接此兩群島的航線。試證: 若若干年後將會有一座島, 它和所有其他島之間都會有航班。
