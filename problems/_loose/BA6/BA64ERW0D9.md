---
tag: BA64ERW0D9
kind: problem
type: answer
answer: r_{i}=\frac{a_{i}}{\sqrt{\sum_{k=1}^{n}a_{k}^{2}}},i=1,2,\cdots,n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=108224
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{1}, a_{2}, \cdots, a_{n}$ be given real numbers, not all zero. If real numbers $r_{1}, r_{2}, \cdots, r_{n}$ satisfy the inequality
$$
\sum_{k=1}^{n} r_{k}\left(x_{k}-a_{k}\right) \leqslant\left(\sum_{k=1}^{n} x_{k}^{2}\right)^{\frac{1}{2}}-\left(\sum_{k=1}^{n} a_{k}^{2}\right)^{\frac{1}{2}}
$$

for any real numbers $x_{1}, x_{2}, \cdots, x_{n}$, find the values of $r_{1}, r_{2}, \cdots, r_{n}$.
(CMO - 3 Problem)
