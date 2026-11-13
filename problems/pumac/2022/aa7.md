---
tag: AP3TW9MA01
kind: problem
appearances:
  - at: pumac/2022/aa7
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2022 official paper
    url: https://pumac.princeton.edu/s/Algebra_A_2022_.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h3444893
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73373
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a positive integer $n \ge 1,$ let $a_n=\lfloor \sqrt[3]{n}+\tfrac{1}{2}\rfloor.$ Given a positive integer $N \ge 1,$ let $\mathcal{F}_N$ denote the set of positive integers $n \ge 1$ such that $a_n \le N.$ Let $S_N = \sum_{n \in \mathcal{F}_N} \tfrac{1}{a_n^2}.$ As $N$ goes to infinity, the quantity $S_N - 3N$ tends to $\tfrac{a\pi^2}{b}$ for relatifvely prime positive integers $a,b.$ Given that $\sum_{k=1}^{\infty} \tfrac{1}{k^2} = \tfrac{\pi^2}{6},$ find $a+b.$
