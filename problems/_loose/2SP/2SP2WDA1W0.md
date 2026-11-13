---
tag: 2SP2WDA1W0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239504
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a finite set of points, $\Phi$, in the $\mathbb{R}^2$, such that they follow the following properties :

- $\Phi$ doesn't contain the origin $\{(0,0)\}$ and not all points are collinear.

- If $\alpha \in \Phi$, then $-\alpha \in \Phi$, $c\alpha \notin \Phi $ for $c\neq 1$ or $-1$

- If $\alpha, \ \beta$ are in $\Phi$, then the reflection of $\beta$ in the line passing through the origin and perpendicular to the line containing origin and $\alpha$ is in $\Phi$

- If $\alpha = (a,b) , \ \beta = (c,d)$, (both $\alpha, \ \beta \in \Phi$) then $\frac{2(ac+bd)}{c^2+d^2} \in \mathbb{Z}$

Prove that there cannot be 5 collinear points in $\Phi$
