---
tag: FMDA6CY22F
kind: problem
type: answer
answer: "516"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=143697
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a set of positive real numbers $\left(x_{1}, x_{2}, \cdots, x_{n}\right)$ satisfying the inequalities
$$
\begin{array}{l}
x_{1}^{2}+x_{2}^{2}+\cdots+x_{k}^{2}<\frac{1}{2}\left(x_{1}+x_{2}+\cdots+x_{k}\right), \\
x_{1}+x_{2}+\cdots+x_{k}<\frac{1}{2}\left(x_{1}^{3}+x_{2}^{3}+\cdots+x_{k}^{3}\right),
\end{array}
$$

try to find the smallest value of $k$ that satisfies the conditions.
