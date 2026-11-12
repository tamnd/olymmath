---
tag: BERKVXHBCY
kind: problem
type: answer
answer: f_{}\leqslant\frac{1}{+2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=25360
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
a) Consider the function $f(x, y)=x^{2}+x y+y^{2}$. Prove that for any point $(x, y)$ there exist integers $(m, n)$ such that $f(x-m, y-n)=(x-m)^{2}+(x-m)(y-n)+(y-n)^{2} \leqslant 1 / 2$.

b) * Denote by $\bar{f}(x, y)$ the minimum of the numbers $f(x-m, y-n)$ for all integers $m$ and $n$. The statement of part a) was that for all $x, y$ the inequality $f(x, y) \leqslant 1 / 2$ holds.

Prove that in fact the stronger inequality $f(x, y) \leqslant 1 / 3$ holds. Find all points for which the equality $\bar{f}(x, y)=1 / 3$ is achieved.
c) * Consider the function $\left.f_{a}(x, y)=x^{2}+a x y^{\prime}+\right]$ $+y^{2}(0 \leqslant a \leqslant 2)$. Find some number $c$ depending on $a$ such that for all $(x, y)$ the inequality $\left|f_{a}(x, y)\right| \leqslant c$ holds. Try to find the best possible estimate.
