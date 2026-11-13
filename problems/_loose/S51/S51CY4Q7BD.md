---
tag: S51CY4Q7BD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=107661
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the function $f(x)$ be defined on the interval $I$. If $f\left(\alpha x_{1}+(1-\alpha) x_{2}\right) \leqslant \alpha f\left(x_{1}\right)+(1-\alpha) f\left(x_{2}\right)$ holds for any real numbers $x_{1}, x_{2} \in I$ and any $\alpha \in(0,1)$, then the function $f(x)$ is called a convex function on the interval $I$. For example, $f(x)=e^{x}$ is a convex function on $(-\infty,+\infty)$.
Let $p>1, q>1, \frac{1}{p}+\frac{1}{q}=1, x_{k}>0, y_{k}>0(1 \leqslant k \leqslant n), a>0, b>0$.
Using the above related knowledge, prove:
(1) (Young's Inequality) $\frac{1}{p} \cdot a^{p}+\frac{1}{q} \cdot b^{q} \geqslant a b$;
(2) (Hölder's Inequality) $\sum_{k=1}^{n} x_{k} y_{k} \leqslant\left(\sum_{k=1}^{n} x_{k}^{p}\right)^{\frac{1}{p}}\left(\sum_{k=1}^{n} y_{k}^{q}\right)^{\frac{1}{q}}$.
