---
tag: NAC5F419AD
kind: problem
type: answer
answer: (\sqrt{k^{2}+1},k\sqrt{\frac{k^{2}+1}{k^{2}-1}})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=97554
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the ray $O A: y=k x(k>0, x>0)$, the ray $O B: y=-k x(x>0)$, a moving point $P(x, y)$ is inside $\angle A O x$, $P M \perp O A, P N \perp O B$, with the feet of the perpendiculars being $M$ and $N$ respectively, and the area of quadrilateral $O M P N$ is exactly $k$.
(1) When $k$ is a constant, find the function $y=f(x)$ expressing the ordinate $y$ of the moving point $P$ in terms of its abscissa $x$;
(2) Based on the range of $k$, determine the domain of the function $y=f(x)$.
