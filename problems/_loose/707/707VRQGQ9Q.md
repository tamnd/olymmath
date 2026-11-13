---
tag: 707VRQGQ9Q
kind: problem
type: answer
answer: \sqrt{}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=78536
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We start with two real numbers $a$ and $b$. We set $x_{0}=a, y_{0}=b$, and at each step:

$$
\begin{aligned}
x_{n+1} & =\frac{x_{n}+y_{n}}{2} \\
y_{n+1} & =\frac{2 x_{n} y_{n}}{x_{n}+y_{n}}
\end{aligned}
$$

Show that the sequences $\left(x_{n}\right)$ and $\left(y_{n}\right)$ have a common limit $\ell$ (i.e., they approach $\ell$ arbitrarily closely when $n$ is sufficiently large), which can be expressed in terms of $a$ and $b$.
