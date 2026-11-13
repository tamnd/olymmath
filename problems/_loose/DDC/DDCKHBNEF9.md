---
tag: DDCKHBNEF9
kind: problem
type: answer
answer: "4021"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=160556
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence of polynomials $a_{n}(x)$ are defined recursively by
$$
\begin{array}{l}
a_{0}(x)=1, \\
a_{1}(x)=x^{2}+x+1, \\
a_{n}(x)=\left(x^{n}+1\right) a_{n-1}(x)-a_{n-2}(x), \text { for all } n \geq 2 .
\end{array}
$$

For example,
$$
\begin{aligned}
a_{2}(x) & =\left(x^{2}+1\right)\left(x^{2}+x+1\right)-1=x^{4}+x^{3}+2 x^{2}+x, \\
a_{3}(x) & =\left(x^{3}+1\right)\left(x^{4}+x^{3}+2 x^{2}+x\right)-\left(x^{2}+x+1\right) \\
& =x^{7}+x^{6}+2 x^{5}+2 x^{4}+x^{3}+x^{2}-1 .
\end{aligned}
$$

Evaluate $a_{2010}(1)$.
