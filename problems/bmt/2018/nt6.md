---
tag: VEQ1P9NPTZ
kind: problem
appearances:
  - at: bmt/2018/nt6
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: berkeley-mt
    name: Berkeley Math Tournament 2018 official paper
    url: https://berkeley.mt/archives/bmt-2018/NTSP18.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
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
---
Ankit wants to create a pseudo-random number generator using modular arithmetic. To do so he starts with a seed $x_0$ and a function $f(x) = 2x + 25$ (mod $31$ ). To compute the $k$ -th pseudo random number, he calls $g(k)$ dened as follows: $$ g(k) = \begin{cases} x_0 \,\, \text{if} \,\, k = 0
f(g(k- 1)) \,\, \text{if} \,\, k > 0 \end{cases} $$ If $x_0$ is $2017$ , compute $\sum^{2017}_{j=0} g(j)$ (mod $31$ ).
