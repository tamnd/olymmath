---
tag: PMY5VZ9DK1
kind: problem
type: answer
answer: f(x)={\begin{pmatrix}x+\frac{1}{x},&x\neq0,\\00&0;\end{pmatrix}.}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=117992
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
13 Given non-zero real numbers $a$ and $b$, find all functions $f: \mathbf{R} \rightarrow \mathbf{R}$ such that
$$
\begin{aligned}
f(2 x) & =a f(x)+b x, \\
f(x) f(y) & =f(x y)+f\left(\frac{x}{y}\right)
\end{aligned}
$$

for all $x \in \mathbf{R}$ and all $y \in \mathbf{R}, y \neq 0$. Here $\mathbf{R}$ denotes the set of real numbers.
