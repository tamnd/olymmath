---
tag: MMVQSQC7YF
kind: problem
type: answer
answer: \frac{1}{3}\leqslant\frac{1}{c_{2}}+\frac{1}{c_{3}}+\cdots+\frac{1}{c_{n}}<\frac{3}{4}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=104880
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the sequence $\left\{a_{n}\right\}\left(n \in \mathbf{Z}_{+}\right)$ have the sum of its first $n$ terms as $S_{n}$, and the point $\left(a_{n}, S_{n}\right)$ lies on the graph of $y=\frac{1}{6}-\frac{1}{3}-x$.
(1) Find the general term formula for the sequence $\left\{a_{n}\right\}$;
(2) If $c_{1}=0$, and for any positive integer $n$, we have
$$
c_{n+1}-c_{n}=\log _{\frac{1}{2}} a_{n} \text {. }
$$

Prove: For any $n \geqslant 2$, we always have
$$
\frac{1}{3} \leqslant \frac{1}{c_{2}}+\frac{1}{c_{3}}+\cdots+\frac{1}{c_{n}}<\frac{3}{4} .
$$
