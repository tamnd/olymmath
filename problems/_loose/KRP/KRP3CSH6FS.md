---
tag: KRP3CSH6FS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=259956
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x_1,x_2,\cdots, x_n$ be real valued differentiable functions of a variable $t$ which satisfy
\begin{align*}
& \frac{\mathrm{d}x_1}{\mathrm{d}t}=a_{11}x_1+a_{12}x_2+\cdots+a_{1n}x_n\\
& \frac{\mathrm{d}x_2}{\mathrm{d}t}=a_{21}x_1+a_{22}x_2+\cdots+a_{2n}x_n\\
& \; \vdots \\
& \frac{\mathrm{d}x_n}{\mathrm{d}t}=a_{n1}x_1+a_{n2}x_2+\cdots+a_{nn}x_n\\
\end{align*}
For some constants $a_{ij}>0$. Suppose that $\lim_{t \to \infty}x_i(t)=0$ for all $1\le i \le n$. Are the functions $x_i$ necessarily linearly dependent?
