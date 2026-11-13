---
tag: X2C9DXBKJX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=125204
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let
$$
P(x)=\frac{\left(x+\sqrt{x^{2}-4}\right)^{b}+\left(x-\sqrt{x^{2}-4}\right)^{b}}{2^{b}},
$$

where $ b $ is a positive odd number. Define the sequence $\left\{S_{i}\right\}$ such that
$$
S_{i}=P\left(S_{i-1}\right), S_{0}=P(6).
$$

If $ n \geqslant 2 $ is a positive integer, such that $ M=\frac{b^{2^{n}}+1}{2} $ is a prime number. Prove: $ M \mid \left(S_{2^{n}-1}-6\right) $.
```
