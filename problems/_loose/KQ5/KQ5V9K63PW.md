---
tag: KQ5V9K63PW
kind: problem
type: answer
answer: 2^{n-1}(n-1)!
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=182225
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that for every odd number $n>1$ the equation

$$
\prod_{k=1}^{\frac{n-1}{2}}\left[n^{2}-(2 k-1)^{2}\right]=\left(n^{2}-1^{2}\right)\left(n^{2}-3^{2}\right) \cdots\left[n^{2}-(n-2)^{2}\right]=2^{n-1}(n-1)!
$$

is satisfied!
