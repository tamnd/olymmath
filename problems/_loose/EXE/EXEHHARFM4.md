---
tag: EXEHHARFM4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Brazil National Olympiad
    url: https://artofproblemsolving.com/community/c6h2489667
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=32440
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: br-obm/2020
    source: hf-ai-mo-aops
    label: 2020 Brazil National Olympiad
---
Consider an inifinte sequence $x_1, x_2,\dots$ of positive integers such that, for every integer $n\geq 1$ :

- If $x_n$ is even, $x_{n+1}=\dfrac{x_n}{2}$ ;
- If $x_n$ is odd, $x_{n+1}=\dfrac{x_n-1}{2}+2^{k-1}$ , where $2^{k-1}\leq x_n<2^k$ .

Determine the smaller possible value of $x_1$ for which $2020$ is in the sequence.
