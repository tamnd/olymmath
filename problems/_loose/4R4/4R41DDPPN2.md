---
tag: 4R41DDPPN2
kind: problem
type: answer
answer: \sum_{i=1}^n c_i^2 = \sum_{i=1}^n b_i
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=227575
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $c_1,c_2,\ldots ,c_n,b_1,b_2,\ldots ,b_n$ $(n\geq 2)$ be positive real numbers. Prove that the equation
$$ \sum_{i=1}^nc_i\sqrt{x_i-b_i}=\frac{1}{2}\sum_{i=1}^nx_i$$
has a unique solution $(x_1,\ldots ,x_n)$ if and only if $\sum_{i=1}^nc_i^2=\sum_{i=1}^nb_i$.
