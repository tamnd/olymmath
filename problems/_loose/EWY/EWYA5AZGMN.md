---
tag: EWYA5AZGMN
kind: problem
type: answer
answer: "250"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=160181
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose $x_{0}, x_{1}, x_{2}, \cdots$ is a sequence of numbers such that $x_{0}=1000$, and
$$
x_{n}=-\frac{1000}{n}\left(x_{0}+x_{1}+x_{2}+\cdots+x_{n-1}\right)
$$
for all $n \geq 1$. Find the value of
$$
\frac{1}{2^{2}} x_{0}+\frac{1}{2} x_{1}+x_{2}+2 x_{3}+2^{2} x_{4}+\cdots+2^{997} x_{999}+2^{998} x_{1000}-
$$
