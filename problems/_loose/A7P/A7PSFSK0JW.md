---
tag: A7PSFSK0JW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91514
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be an odd number greater than 1, and given
$$
\begin{aligned}
x_{0} & =\left(x_{1}^{(0)}, x_{2}^{(0)}, x_{n}^{(0)}\right)=(1,0, \cdots, 0,1) \\
\text { Let } x_{i}^{k} & =\left\{\begin{array}{l}
0, x_{i}^{(k-1)}=x_{i+1}^{k-1} \\
1, x_{i}^{(k-1)} \neq x_{i+1}^{k-1}
\end{array}, i=1,2, \cdots, n\right.
\end{aligned}
$$

where $x_{n+1}^{k-1}=x_{1}^{k-1}$. Denote
$$
x_{k}=\left(x_{1}^{(k)}, x_{2}^{(k)}, \cdots, x_{n}^{(k)}\right), k=1,2, \cdots
$$

If a positive integer $m$ satisfies $x_{m}=x_{0}$, prove that $m$ is a multiple of $n$.
