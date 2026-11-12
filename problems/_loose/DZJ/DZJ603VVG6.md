---
tag: DZJ603VVG6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1985 IberoAmerican
    url: https://artofproblemsolving.com/community/c6h82557
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=22908
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/1985
    source: hf-ai-mo-aops
    label: 1985 IberoAmerican
---
To each positive integer $ n$ it is assigned a non-negative integer $f(n)$ such that the following conditions are satisfied:

(1) $ f(rs) = f(r)+f(s)$ (2) $ f(n) = 0$ , if the first digit (from right to left) of $ n$ is 3.
(3) $ f(10) = 0$ .

Find $f(1985)$ . Justify your answer.
