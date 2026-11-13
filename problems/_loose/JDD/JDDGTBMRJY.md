---
tag: JDDGTBMRJY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178604
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a, b, c, d \in \mathbf{R}$ such that $a+b=t \neq 0$ and $a b=c d$. Consider the set:

$M=\left\{\left.\left(\begin{array}{ccc}a x+1 & 0 & c x \\ 0 & 0 & 0 \\ d x & 0 & b x+1\end{array}\right) \right\rvert x \in \mathbf{R} \backslash\left\{-\frac{1}{t}\right\}\right\}$. Show that:
a) $(\mathrm{M}, \cdot)$ is an abelian group.
b) $(\mathrm{M}, \cdot)$ is isomorphic to the group $(G, *)$ where $G=\mathbf{R} \backslash\left\{-\frac{1}{t}\right\}$ and $x * y=x+y+t x y$.
