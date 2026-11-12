---
tag: Y6EZXMZ4HD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h1578502
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16425
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2018
    source: hf-ai-mo-aops
    label: 2018 China Team Selection Test
---
Given positive integers $n, k$ such that $n\ge 4k$ , find the minimal value $\lambda=\lambda(n,k)$ such that for any positive reals $a_1,a_2,\ldots,a_n$ , we have
$$ \sum\limits_{i=1}^{n} {\frac{{a}_{i}}{\sqrt{{a}_{i}^{2}+{a}_{{i}+{1}}^{2}+{\cdots}{{+}}{a}_{{i}{+}{k}}^{2}}}}
\le \lambda$$
Where $a_{n+i}=a_i,i=1,2,\ldots,k$
