---
tag: T2BZSWV5ED
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91692
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the function
$$
f_{n}(x)=1+x+\frac{1}{2!} x^{2}+\cdots+\frac{1}{n!} x^{n} \text {. }
$$
(1) Prove: When $x \in(0,+\infty), n \in \mathbf{Z}_{+}$, $\mathrm{e}^{x}>f_{n}(x)$.
(2) Let $x>0, n \in \mathbf{Z}_{+}$. If there exists $y \in \mathbf{R}$, such that
$$
\mathrm{e}^{x}=f_{n}(x)+\frac{1}{(n+1)!} x^{n+1} \mathrm{e}^{y} \text {, }
$$

Prove: $0<y<x$.
