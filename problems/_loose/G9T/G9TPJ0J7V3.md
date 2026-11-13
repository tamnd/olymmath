---
tag: G9TPJ0J7V3
kind: problem
type: answer
answer: \frac{n-1}{4}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=144278
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $n \geq 2$, non-negative real numbers $a_{i}(1 \leq i \leq n)$ satisfy $\sum_{i=1}^{n} a_{i}=1$, try to find the maximum value of $\sum_{1 \leq i<j \leq n}(j-$ i) $\mathrm{a}_{\mathrm{i}} \mathrm{a}_{\mathrm{j}}$.
