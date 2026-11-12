---
tag: X8A0JRXGVA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 BMT Spring
    url: https://artofproblemsolving.com/community/c6h2751387
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69886
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2015
    source: hf-ai-mo-aops
    label: 2015 BMT Spring
---
Two sequences $(x_n)_{n\in N}$ and $(y_n)_{n\in N}$ are defined recursively as follows: $x_0 = 2015$ and $x_{n+1} =\left \lfloor x_n \cdot \frac{y_{n+1}}{y_{n-1}} \right \rfloor$ for all $n \ge 0$ , $y_0 = 307$ and $y_{n+1} = y_n + 1$ for all $n \ge 0$ .

Compute $\lim_{n\to \infty} \frac{x_n}{(y_n)^2}$ .
