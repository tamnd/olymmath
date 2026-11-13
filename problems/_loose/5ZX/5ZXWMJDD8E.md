---
tag: 5ZXWMJDD8E
kind: problem
type: answer
answer: \frac{(n-2)(n-1)}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241855
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be an integer greater than or equal to $2$. $n$ people from each of $n$ countries gather, a total of $n^2$ people facing inward and surround the round table. For any two different people in the same country, their left neighbors belong to different countries. Find the maximum number of people whose left and right neighbors belong to the same country.
