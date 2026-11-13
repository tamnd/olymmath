---
tag: QVRR4PX8DJ
kind: problem
type: answer
answer: n_{1}=1988,\quadn_{2}=1989=n_{1}+1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=182837
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The following system of equations is to be solved. Here, $n_{1}$ and $n_{2}$ are natural numbers, and $p_{i} (i=1,2, \ldots, 6)$ are prime numbers.

$$
\begin{array}{r}
n_{1}=p_{1}^{2} p_{2} p_{3} \\
n_{2}=n_{1}+1=p_{4}^{2} p_{5} p_{6} \\
p_{2}=p_{3}-p_{1}^{6} \\
p_{3}=p_{1} p_{4}^{3}+p_{6} \\
p_{5}=p_{2}+p_{1} p_{4} \\
p_{6}=p_{1}^{2}+p_{2}+p_{1} p_{4}
\end{array}
$$
