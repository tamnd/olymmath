---
tag: H26H8QTMGD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: zh
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0000.parquet#row=163
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
令 $n \ge 4$. $M$ 是平面上 $n$ 個點所成集合, 其中任三點不共線。在遊戲開始前, 在平面上做 $n$ 條線段, 使得每條線段的兩端點都屬於 $M$, 且 $M$ 裡的每個點都恰為兩條線段的端點。
我們接著考慮以下操作: 選擇兩個有交點 (含端點) 的線段 $AB$ 與 $CD$, 將這兩條線段擦掉, 並畫上 $AC$ 與 $BD$.
試證：我們不可能執行 $\frac{n^3}{4}$ 或更多次操作。
