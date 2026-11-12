---
tag: 58GQZVV26Q
kind: problem
type: answer
answer: f(n)=\frac{n(n+1)(2n+1)}{6}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=40220
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
It is easy to compute the values of the function

$$
f(n)=1^{2}+2^{2}+\ldots+n^{2}
$$

for individual values of $n$:

$$
f(1)=1, f(2)=5, f(3)=14
$$

Using such computations performed for several (how many?) values of $n$, and the answers to questions 455 and 456, prove the identity

$$
\begin{aligned}
1^{2}+2^{2}+3^{2} & +\cdots+n^{2}=\frac{1}{3} n^{3}+\frac{1}{2} n^{2}+\frac{1}{6} n= \\
& =\frac{n(n+1)(2 n+1)}{6}
\end{aligned}
$$
