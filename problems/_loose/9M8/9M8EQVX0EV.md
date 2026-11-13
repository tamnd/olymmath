---
tag: 9M8EQVX0EV
kind: problem
type: answer
answer: +2(++)+\pi(+b+)+\frac{4\pi}{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187944
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a cuboid with edges $a, b, c$; let's denote it by $A$. Let

$$
B=\left\{X \mid X \in \mathbb{R}^{3}, d(X, A) \leq 1\right\}
$$

represent the geometric locus of points $X$ in space for which there exists at least one point on the cuboid $A$ that is at a distance not greater than 1 from the point $X$. Determine the volume $V_{B}$ in terms of $a, b, c$.
