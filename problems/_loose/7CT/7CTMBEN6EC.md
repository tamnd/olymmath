---
tag: 7CTMBEN6EC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=38959
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that if a continuous function $f(x)$ is non-negative on the interval $[a, b]$, then $\int_{a}^{b} f(x) d x \geqslant 0$. Moreover, if $f\left(x_{0}\right)>0$ for some point $x_{0}$ in the interval $[a, b]$, then $\int_{a}^{b} f(x) d x>0$.

| It is often convenient to consider definite integrals $\int_{b}^{a} f(x) d x$ for $a<b$. Specifically, we assume $\int_{b}^{a} f(x) d x=-\int_{a}^{b} f(x) d x$. With such conventions, the formulas for change of variables and the relation

$$
\int_{a}^{b} f(x) d x+\int_{b}^{c} f(x) d x=\int_{a}^{c} f(x) d x
$$

remain valid.
