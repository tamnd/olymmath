---
tag: EGXSFYRSEY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33832
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f=f(x)$ be a convex non-decreasing function, $f(-\infty)=0$. Using the fact that any convex function $f$ has a non-decreasing derivative $f^{\prime}$ almost everywhere, show that

$$
f(x)=\int_{\mathbb{R}}(x-u)^{+} d f^{\prime}(u)
$$

where $x^{+}=x \vee 0$, and the integral with respect to $d f^{\prime}$ is a Lebesgue-Stieltjes integral (the derivative $f^{\prime}$ can be chosen to be right-continuous).
