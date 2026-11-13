---
tag: QAPP71DQVD
kind: problem
appearances:
  - at: pumac/2022/na7
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2022 official paper
    url: https://pumac.princeton.edu/s/Number_Theory_A_2022_.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h3444992
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73393
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a positive integer $n,$ let $f(n)$ be the number of integers $m$ satisfying $0 \le m \le n - 1$ such that there exists an integer solution to the congruence $x^2 \equiv m \pmod{n}.$ It is given that as $k$ goes to $\infty,$ the value of $f(225^k)/225^k$ converges to some rational number $p/q,$ where $p,q$ are relatively prime positive integers. Find $p + q.$
