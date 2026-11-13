---
tag: AJEPJHE4EP
kind: problem
appearances:
  - at: pumac/2015/na8
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2015 official paper
    url: https://pumac.princeton.edu/s/PUMaC2015_NumberTheoryA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1167042
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=12962
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n = 2^{2015} - 1$ . For any integer $1 \le x < n$ , let $$f_n(x) = \sum\limits_p s_p(n-x) + s_p(x) - s_p(n),$$ where $s_q(k)$ denotes the sum of the digits of $k$ when written in base $q$ and the summation is over all primes $p$ . Let $N$ be the number of values of $x$ such that $4 | f_n(x)$ . What is the remainder when $N$ is divided by $1000?$
