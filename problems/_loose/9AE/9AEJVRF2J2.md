---
tag: 9AEJVRF2J2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: zh
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0001.parquet#row=34
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
班長看老趙當兵太無聊了, 所以派他去排饅頭。有 $n$ 種不同顏色的饅頭, 第 $i$ 種顏色的饅頭有 $a_i$ 顆, 總共有 $S = a_1 + a_2 + \cdots + a_n$ 顆。這 $S$ 顆饅頭兩兩相異。老趙現在可以決定要如何把這 $S$ 顆饅頭排成一排。對於每一個排列, 班長用以下的方式為老趙評分:
(i) 首先, 對於每個 $i \in \{1, 2, \cdots, n\}$, 計算第 $i$ 種顏色的饅頭相鄰的次數, 也就是
$$
c_i = \#\{j: 1 \le j \le S-1, \text{左數第 } j \text{ 顆和第 } j+1 \text{ 顆饅頭都是第 } i \text{ 色}\}
$$
(ii) 老趙的分數定義為 $c_1 \times c_2 \times \cdots \times c_n$.

若 $S$ 是合數, 證明所有排列的得分總和是 $S$ 的倍數。
