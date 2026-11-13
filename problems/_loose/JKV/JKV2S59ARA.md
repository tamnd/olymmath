---
tag: JKV2S59ARA
kind: problem
type: answer
answer: (\frac{\sqrt{2}}{2}-1,0)\cup(0,1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=125691
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a fixed point $M(-1,2)$, line $l_{1}: y=a(x+1)$, and curve $c: y=\sqrt{x^{2}+1}$. $l_{1}$ intersects $c$ at points $A$ and $B$. $N$ is the midpoint of segment $AB$. Line $\ell_{2}$ passes through points $M$ and $N$, and has an $x$-intercept of $m$. Express $m$ as a function of $a$, $m=f(a)$. Let $g(m)=-\frac{2}{m+1}$. Find the range of $g(f(a))$.
