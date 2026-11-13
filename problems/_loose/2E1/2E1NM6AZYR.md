---
tag: 2E1NM6AZYR
kind: problem
type: answer
answer: ((n+1)(n+2))/2 - 3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: zh
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0000.parquet#row=260
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
令 $n$ 為一正整數且 $3$ 不能整除 $n$。一個 $n$ 階三角陣是把一個大正三角形分成 $n^2$ 個相等大小的小正三角形，以過各邊的所有 $n$ 等分點對其他邊做平行線分割而成。在 $n$ 階三角陣每個小三角形頂點上放一顆橘子，共有
$$
\frac{(n+1)(n+2)}{2}
$$
顆橘子。一組三顆橘子 $A, B, C$ 被稱為**好的**，若且唯若 $\overline{AB}$ 和 $\overline{AC}$ 各是某小三角形的一邊，且 $\angle BAC = 120^{\circ}$。

**言言**每次可以選一組好的三顆橘子拿走。試求**言言**最多可以拿走幾顆橘子。
