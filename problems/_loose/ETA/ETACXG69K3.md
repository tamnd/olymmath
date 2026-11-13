---
tag: ETACXG69K3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=81228
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(The Fibonacci sequence) The famous Fibonacci sequence is defined as follows:

$$
\begin{gathered}
F_{0}=0, F_{1}=1 \\
F_{n+2}=F_{n+1}+F_{n}
\end{gathered}
$$

1. Let $\varphi$ and $\varphi^{\prime}$ be the two roots of the equation $x^{2}-x-1=0$.

$$
\varphi=\frac{1+\sqrt{5}}{2}, \varphi^{\prime}=\frac{1-\sqrt{5}}{2}
$$

Show that there exist two real numbers $\lambda$ and $\mu$ such that

$$
F_{n}=\lambda \cdot \varphi^{n}+\mu \cdot \varphi^{\prime n}
$$

Can you generalize the result to all sequences of the form $u_{n+2}=a u_{n+1}+b u_{n}$?

2. Show that

$$
\lim _{n \rightarrow \infty} \frac{F_{n+1}}{F_{n}}=\varphi
$$

3. Show the following formulas:

$$
\begin{gathered}
\sum_{i=1}^{n} F_{i}^{2}=F_{n} F_{n+1} \\
F_{2 n-1}=F_{n}^{2}+F_{n+1}^{2} \\
m\left|n \Rightarrow F_{m}\right| F_{n}
\end{gathered}
$$
