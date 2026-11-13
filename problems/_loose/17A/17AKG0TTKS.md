---
tag: 17AKG0TTKS
kind: problem
type: answer
answer: (7,10,1949)(7,10,1979)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=182589
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Solve the following system of Diophantine equations

$$
\begin{array}{r}
135 x_{1}+100 x_{2}-x_{3}=-4 \\
97 x_{1}+132 x_{2}-x_{4}=20 \\
7 x_{1}+193 x_{2}-x_{4}=0
\end{array}
$$

with the conditions $x_{1} ; x_{2} ; x_{3} ; x_{4} \in N, x_{2} \leq 30$ and form the triples $\left(x_{1} ; x_{2}, x_{3}\right)$ and $\left(x_{1} ; x_{2}, x_{4}\right)$.
