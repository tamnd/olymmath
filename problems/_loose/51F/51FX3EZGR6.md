---
tag: 51FX3EZGR6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33207
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all $\lambda$ and $u$ such that

$$
\begin{aligned}
& \Delta u=\lambda u \text { in the domain } \Omega=\left\{r_{1}^{2}<x^{2}+y^{2}<r_{2}^{2}\right\}, \\
& \alpha u+\beta \frac{\partial u}{\partial n}=0 \text { on the boundary of the domain } \Omega,
\end{aligned}
$$

where $\alpha=1, \beta=0$ when $x^{2}+y^{2}=r_{1}^{2}$ and $\alpha=0, \beta=1$ when $x^{2}+y^{2}=r_{2}^{2}$.
