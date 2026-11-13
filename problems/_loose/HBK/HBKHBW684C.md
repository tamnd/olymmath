---
tag: HBKHBW684C
kind: problem
type: answer
answer: z_{k}=\cos\frac{k\pi}{2^{n-1}}+i\sin\frac{k\pi}{2^{n-1}},\quad\text{for}k\in{0,1,2,\ldots,2^{n}-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=87397
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a natural number. Determine all complex numbers $z$ such that

$$
\left(1-z+z^{2}\right)\left(1-z^{2}+z^{4}\right)\left(1-z^{4}+z^{8}\right) \cdots\left(1-z^{2^{n-1}}+z^{2^{n}}\right)=\frac{3 z^{2^{n}}}{1+z+z^{2}}
$$
