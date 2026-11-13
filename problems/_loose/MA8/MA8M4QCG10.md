---
tag: MA8M4QCG10
kind: problem
type: answer
answer: f(3,3)=61,\;f(4,2)=2^{65533}-3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186142
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f$ be the function defined for all ordered pairs $(x ; y)$ of natural numbers $x, y$ that satisfies the following equations (1), (2), (3) for all natural numbers $x, y$:

$$
\begin{aligned}
f(0, y) & =y+1 \\
f(x+1,0) & =f(x, 1) \\
f(x+1, y+1) & =f(x, f(x+1, y))
\end{aligned}
$$

Determine a) the function value $f(3,3)$, b) the function value $f(4,2)$.
