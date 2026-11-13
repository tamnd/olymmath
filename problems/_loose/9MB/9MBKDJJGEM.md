---
tag: 9MBKDJJGEM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=144393
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer, and it is known that
$$
\begin{array}{l}
f(x)=a_{n} x^{n}+a_{n-1} x^{n-1}+\cdots+a_{1} x+a_{0}, \\
g(x)=\frac{k}{a_{n}} x^{n}+\frac{k}{a_{n-1}} x^{n-1}+\cdots+\frac{k}{a_{1}} x+\frac{k}{a_{0}} .
\end{array}
$$

Here $k$ and $a_{i}(0 \leqslant i \leqslant n)$ are all positive real numbers. Prove:
(1) When $k \geqslant \frac{1}{4}$, $f(g(1)) g(f(1)) \geqslant 4 k$;
(2) When $0<k \leqslant \frac{1}{4}$, it is possible to appropriately choose $n$ and $a_{0}, a_{1}, \cdots, a_{n}$, such that $f(g(1)) g(f(1))<4 k$.
