---
tag: H57D3JTFQJ
kind: problem
type: answer
answer: n(n+1)(2n+1)/6
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: zh
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0000.parquet#row=246
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
令 $n$ 為大於 $1$ 的正整數。一個 $n \times n \times n$ 的大立方體由 $n^3$ 個邊長為 $1$ 的小立方體所構成。每個小立方體被塗上一種顏色。從這個大正方體中，我們沿著 $x$ 軸的方向截取出 $n$ 個不同的 $1 \times n \times n$ 的長方體 $R_1, R_2, \cdots, R_n$。令 $C_i$ 為 $R_i$ 中所有小立方體的顏色所成集合，並令 $\mathcal{X} = \{C_1, C_2, \cdots, C_n\}$。以同樣的方式，令 $\mathcal{Y}$ 為沿著 $y$ 軸的方向截取 $n \times 1 \times n$ 長方體下造出來的集合，而 $\mathcal{Z}$ 為沿著 $z$ 軸的方向截取 $n \times n \times 1$ 長方體下造出來的集合。

假設我們知道，對於 $\mathcal{X}, \mathcal{Y}$ 與 $\mathcal{Z}$，若有個顏色集屬於其中一個集合，則它必也屬於另外兩個集合。試求這 $n^3$ 個小立方體顏色總數的最大值（以 $n$ 表示。）

（例：若 $R_1$ 中包含紅、藍、綠三色，則 $C_1 = \{\text{紅, 藍, 綠}\}$。）
