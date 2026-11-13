---
tag: HPN1H5W5R4
kind: problem
type: answer
answer: \left| \int_0^1 x^n f(x) \, dx \right| \leq \frac{M}{2^n (n+1)}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242148
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ f(x)$ be the continuous function at $ 0\leq x\leq 1$ such that $ \int_0^1 x^kf(x)\ dx=0$ for integers $ k=0,\ 1,\ \cdots ,\ n-1\ (n\geq 1).$

(1) For all real numbers $ t,$ find the minimum value of $ g(t)=\int_0^1 |x-t|^n\ dx.$

(2) Show the following equation for all real real numbers $ t.$

$ \int_0^1 (x-t)^nf(x)\ dx=\int_0^1 x^nf(x)\ dx$

(3) Let $ M$ be the maximum value of the function $ |f(x)|$ for $ 0\leq x\leq 1.$

Show that $ \left|\int_0^1 x^nf(x)\ dx\right|\leq \frac{M}{2^n(n+1)}$
