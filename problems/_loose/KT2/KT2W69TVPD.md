---
tag: KT2W69TVPD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=168182
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the plane, $n(\geq 3)$ lines intersect each other pairwise, but not all of them have a common point. Let the number of intersection points be denoted by $M$, the number of intersection points on each line by $R_{1}, R_{2}, \ldots, R_{n}$, and the number of lines passing through each intersection point by $r_{1}, r_{2} \ldots, r_{M}$. The latter will be referred to as the order of the points. Prove the following:

a) On any given line, the number of points of even order is even if $n$ is odd, and odd if $n$ is even.

$$
\begin{aligned}
& \text { b) }\left(r_{1}-1\right) r_{1}+\left(r_{2}-1\right) r_{2}+\ldots+\left(r_{M}-1\right) r_{M}=(n-1) n \\
& \text { c) } R_{1}+R_{2}+\ldots+R_{n}=r_{1}+r_{2}+\ldots+r_{M} \\
& \text { d) } r_{1}+r_{2}+\ldots+r_{M} \geq 2 n+M-3 \\
& \text { e) } R_{1}+R_{2}+\ldots+R_{n} \geq 3 n-3 \\
& \text { f) } \frac{R_{1}+R_{2}+\ldots+R_{n}}{n} \geq \frac{r_{1}+r_{2}+\ldots+r_{M}}{M}
\end{aligned}
$$
