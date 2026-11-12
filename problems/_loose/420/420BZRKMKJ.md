---
tag: 420BZRKMKJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: Taiwan TST 2015 Round 1
    url: https://artofproblemsolving.com/community/c6h1077656
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=61122
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2015
    source: hf-ai-mo-aops
    label: Taiwan TST 2015 Round 1
---
Given a positive integer $n \geq 3$ . Find all $f:\mathbb{R}^+ \rightarrow \mathbb{R}^+$ such that for any $n$ positive reals $a_1,...,a_n$ , the following condition is always satisfied: $\sum_{i=1}^{n}(a_i-a_{i+1})f(a_i+a_{i+1}) = 0$ where $a_{n+1} = a_1$ .
