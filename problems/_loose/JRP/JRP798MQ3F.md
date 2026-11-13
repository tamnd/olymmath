---
tag: JRP798MQ3F
kind: problem
type: answer
answer: \frac{1}{(1-x)^2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=175496
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's determine the sum of the following series:

$$
1+2 \cdot x+3 \cdot x^{2}+\ldots+n \cdot x^{n-1}+(n+1) \cdot x^{n}
$$

What is the sum when $x<1$ and $n$ is infinitely large?
