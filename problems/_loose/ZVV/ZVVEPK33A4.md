---
tag: ZVVEPK33A4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: zh
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0001.parquet#row=97
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
給定一個大於 $1$ 的正整數 $N$。甲乙兩人進行下面遊戲：
(1) 甲說一個正整數 $A$。
(2) 乙說一個正整數 $B > 1$，其中 $B$ 必須是 $A$ 的因數或是 $A$ 的倍數。
(3) 甲從 $B-1$, $B$, $B+1$ 中說一個數作為新的 $A$。
遊戲以下輪流進行步驟 (2) 和 (3)。若前 $50$ 個被說到的數字中有 $N$，則乙勝；否則甲勝。試回答下列問題。

i. 證明：當 $N=10$ 時，甲有必勝策略。

ii. 證明：當 $N=24$ 時，乙有必勝策略。

iii. 找出讓乙有必勝策略的所有大於 $1$ 的正整數 $N$。
