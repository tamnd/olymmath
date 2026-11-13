---
tag: 5AB25WS6FQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=113811
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $n \in \mathbf{Z}_{+}$, the circle $C_{n}: x^{2}+y^{2}=R_{n}^{2}$ $\left(R_{n}>0\right)$ intersects the positive $y$-axis at point $M$, and intersects the curve $y=\sqrt{x}$ at point $N\left(\frac{1}{n}, y_{n}\right)$. The line $M N$ intersects the $x$-axis at point $A\left(a_{n}, 0\right)$. Prove:
(1) $a_{n}>a_{n+1}>2$;
(2) If $S_{n}=\sum_{i=1}^{n} a_{i}, T_{n}=\sum_{i=1}^{n} \frac{1}{i}$, then
$$
\frac{7}{5}<\frac{S_{n}-2 n}{T_{n}}<\frac{3}{2} .
$$
