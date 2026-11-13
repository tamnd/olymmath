---
tag: 8WDR68V9QZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0001.parquet#row=110
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo
    source: hf-mathnet
    label: Ukraine 58th Ukrainian National Mathematical Olympiad
---
Country "U" has cities $A_1, A_2, \dots, A_n$. They are connected with flights so that one can get from any city to any other city with layovers. Let $d_{i,j}$ be the smallest amount of flights needed to get from city $A_i$ to city $A_j$, and let $d$ be the total number of flights in country "U" and let
$$
D = d_{1,1} + d_{1,2} + \dots + d_{1,n} + d_{2,3} + d_{2,4} + \dots + d_{2,n} + \dots + d_{n-1,n}.
$$

Show that:
$$
d + \frac{D}{n-1} \le \frac{1}{2}(n+1)(n+2).
$$
