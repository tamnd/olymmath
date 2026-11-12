---
tag: SDJZRBSZ1C
kind: problem
type: answer
answer: 0,\frac{50}{100},\frac{51}{100},\ldots,\frac{99}{100},1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=26448
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the decimal representation of a positive number $\alpha$, all decimal places starting from the third digit after the decimal point are discarded (i.e., an approximation of $\alpha$ with a deficiency is taken to an accuracy of 0.01). The resulting number is divided by $\alpha$, and the quotient is again rounded down to the same accuracy. What numbers can result from this (list all possible values)?
