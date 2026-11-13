---
tag: 4BTNJFEYA1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=180002
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequences $\left(x_{n}\right)_{n \geqslant 0}$ and $\left(y_{n}\right)_{n \geqslant 0}$ of real numbers are defined by $x_{0}=y_{0}=1$ and

$$
\binom{x_{n+1}}{y_{n+1}}=\frac{1}{2}\left(\begin{array}{ll}
3 & 5 \\
1 & 3
\end{array}\right) \cdot\binom{x_{n}}{y_{n}}, n \geqslant 0
$$

Show that $x_{n+2}-3 x_{n+1}+x_{n}=0$ and $y_{n+2}-3 y_{n+1}+y_{n}=0$, for any $n \geqslant 0$. Prove that the equation $x^{2}-5 y^{2}=-4$ has infinitely many solutions in the set of integers.
