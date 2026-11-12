---
tag: AJEPJHE4EP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
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
unplaced:
  - at: pumac/2015
    source: hf-ai-mo-aops
    label: 2015 Princeton University Math Competition
---
Let $n = 2^{2015} - 1$ . For any integer $1 \le x < n$ , let $$f_n(x) = \sum\limits_p s_p(n-x) + s_p(x) - s_p(n),$$ where $s_q(k)$ denotes the sum of the digits of $k$ when written in base $q$ and the summation is over all primes $p$ . Let $N$ be the number of values of $x$ such that $4 | f_n(x)$ . What is the remainder when $N$ is divided by $1000?$
