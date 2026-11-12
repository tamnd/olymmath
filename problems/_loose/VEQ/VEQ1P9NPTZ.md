---
tag: VEQ1P9NPTZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 BMT Spring
    url: https://artofproblemsolving.com/community/c6h3275439
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70123
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2018
    source: hf-ai-mo-aops
    label: 2018 BMT Spring
---
Ankit wants to create a pseudo-random number generator using modular arithmetic. To do so he starts with a seed $x_0$ and a function $f(x) = 2x + 25$ (mod $31$ ). To compute the $k$ -th pseudo random number, he calls $g(k)$ dened as follows: $$ g(k) = \begin{cases} x_0 \,\, \text{if} \,\, k = 0
f(g(k- 1)) \,\, \text{if} \,\, k > 0 \end{cases} $$ If $x_0$ is $2017$ , compute $\sum^{2017}_{j=0} g(j)$ (mod $31$ ).
