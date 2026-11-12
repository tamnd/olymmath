---
tag: BDMXTA102J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 ELMO  Shortlist
    url: https://artofproblemsolving.com/community/c6h3600586
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69371
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: elmo-sl/2025
    source: hf-ai-mo-aops
    label: 2025 ELMO  Shortlist
---
Fix positive integers $n$ and $k$ with $n \geq k$ . Determine the smallest positive integer $d$ satisfying the following condition:

For any (not necessarily distinct) real numbers $a_1$ , $\dots$ , $a_n$ , there exists a real-coefficient polynomial $f$ in $k$ variables satisfying the following properties:

- $f$ has degree at most $d$ ;
- $f$ is not identically $0$ ;
- for any permutation $b_1, \ldots, b_n$ of $a_1, \ldots, a_n$ , the equation $f(b_1, \ldots, b_k) = 0$ holds.

*Benny Wang*
