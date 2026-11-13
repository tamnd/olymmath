---
tag: MAQ4GQ3WTB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=190574
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The set of natural numbers is divided into sets in the following way:

$$
\{1\},\{2,3\},\{4,5,6\},\{7,8,9,10\}, \ldots
$$

Let $S_{k}$ be the sum of the numbers in the $k$-th set (set with $k$ elements). Prove that

$$
S_{1}+S_{3}+S_{5}+\ldots+S_{2 n-1}=n^{4}
$$
