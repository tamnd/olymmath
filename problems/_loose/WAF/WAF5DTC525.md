---
tag: WAF5DTC525
kind: problem
type: answer
answer: k = 2008
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267120
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given that \begin{align*}x &= 1 - \frac 12 + \frac13 - \frac 14 + \cdots + \frac1{2007},\\ y &= \frac{1}{1005} + \frac{1}{1006} + \frac{1}{1007} + \cdots + \frac 1{2007},\end{align*}
find the value of $k$ such that $$x = y + \frac 1k.$$
