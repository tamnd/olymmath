---
tag: 5XS1FJKNKJ
kind: problem
type: answer
answer: '{-31,-30,\ldots,-1,1,2,\ldots,30,31}'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=87751
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine the set of all integers $n$ for which the inequality

$$
\left(1+\frac{1}{3}\right)\left(1+\frac{1}{8}\right)\left(1+\frac{1}{15}\right) \cdots\left(1+\frac{1}{2019^{2}-1}\right)<\frac{2019}{n^{2}}
$$

holds.
