---
tag: N98RJM6GP2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=100205
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer, $X$ a finite set, and the mapping $f: X \rightarrow X$ satisfies that for any $x \in X$,
$$
\begin{array}{l}
f^{(n)}(x)=x, \text { where } f^{(1)}(x)=f(x), \\
f^{(i)}(x)=f\left(f^{(i-1)}(x)\right)(i \geqslant 2) .
\end{array}
$$

Let $m_{j}$ be the number of elements in the set $\left\{x \in X \mid f^{(j)}(x)=x\right\}$. For any integer $k$, prove:
(1) $\frac{1}{n} \sum_{j=1}^{n} m_{j} \sin \frac{2 j k \pi}{n}=0$;
(2) $\frac{1}{n} \sum_{j=1}^{n} m_{j} \cos \frac{2 j k \pi}{n}$ is a non-negative integer.
