---
tag: BKJMQ66VE6
kind: problem
type: answer
answer: x_{n}={\begin{pmatrix}k,n=2k-1,\\\sqrt{k^{2}+\frac{1}{k}},n=2k\end{pmatrix}\quad(k\in{N}^{*}).}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=122834
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $[x],\{x\}$ be the integer part and fractional part functions, respectively. Given the equation
$$
\sqrt{[x]\left[x^{3}\right]}+\sqrt{\{x\}\left\{x^{3}\right\}}=x^{2}(x \geqslant 1)
$$

the solutions can be arranged in an increasing sequence $\left\{x_{n}\right\}_{n=1}^{+\infty}$. Find the general term formula for the sequence $\left\{x_{n}\right\}$.
