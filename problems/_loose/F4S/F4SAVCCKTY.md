---
tag: F4SAVCCKTY
kind: problem
type: answer
answer: 2^n - 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213091
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $l$ be the tangent line at the point $P(s,\ t)$ on a circle $C:x^2+y^2=1$. Denote by $m$ the line passing through the point $(1,\ 0)$, parallel to $l$. Let the line $m$ intersects the circle $C$ at $P'$ other than the point $(1,\ 0)$.

Note : if $m$ is the line $x=1$, then $P'$ is considered as $(1,\ 0)$.

Call $T$ the operation such that the point $P'(s',\ t')$ is obtained from the point $P(s,\ t)$ on $C$.

(1) Express $s',\ t'$ as the polynomials of $s$ and $t$ respectively.

(2) Let $P_n$ be the point obtained by $n$ operations of $T$ for $P$.

For $P\left(\frac{\sqrt{3}}{2},\ \frac{1}{2}\right)$, plot the points $P_1,\ P_2$ and $P_3$.

(3) For a positive integer $n$, find the number of $P$ such that $P_n=P$.
