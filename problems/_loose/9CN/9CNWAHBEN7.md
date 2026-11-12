---
tag: 9CNWAHBEN7
kind: problem
type: answer
answer: \frac{12}{5},\frac{12}{7},-12
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=9251
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We will "flip" each of the equations in the system:

$$
\left\{\begin{array}{l}
\frac{x+y}{x y}=1 \\
\frac{y+z}{y z}=\frac{1}{2} \\
\frac{x+z}{x z}=\frac{1}{3}
\end{array}\right.
$$

(The transformation is equivalent since none of the right-hand sides can become zero).

Notice that $\frac{x+y}{x y}=\frac{1}{x}+\frac{1}{y}$, and so on. Therefore, we have obtained a system of linear equations in terms of $\frac{1}{x}, \frac{1}{y}$, and $\frac{1}{z}$.

Solving it, we get $\frac{1}{x}=\frac{5}{12}, \frac{1}{y}=\frac{7}{12}, \frac{1}{z}=-\frac{1}{12}$.
