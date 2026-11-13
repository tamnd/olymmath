---
tag: XGK5NAWZ1T
kind: problem
appearances:
  - at: pumac/2015/aa5
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2015 official paper
    url: https://pumac.princeton.edu/s/PUMaC2015_AlgebraA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1165950
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=12960
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Since counting the numbers from 1 to 100 wasn't enough to stymie Gauss, his teacher devised another clever problem that he was sure would stump Gauss. Defining $\zeta_{15} = e^{2\pi i/15}$ where $i = \sqrt{-1}$ , the teacher wrote the 15 complex numbers $\zeta_{15}^k$ for integer $0 \le k < 15$ on the board. Then, he told Gauss:

On every turn, erase two random numbers $a, b$ , chosen uniformly randomly, from the board and then write the term $2ab - a - b + 1$ on the board instead. Repeat this until you have one number left. What is the expected value of the last number remaining on the board?
