---
tag: DCFZXWM5PB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239344
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f$ be a function defined on $(0, \infty )$ as follows:
$$f(x)=x+\frac1x$$
Let $h$ be a function defined for all $x \in (0,1)$ as
$$h(x)=\frac{x^4}{(1-x)^6}$$
Suppose that $g(x)=f(h(x))$ for all $x \in (0,1)$.

(a) Show that $h$ is a strictly increasing function.

(b) Show that there exists a real number $x_0 \in (0,1)$ such that $g$ is strictly decreasing in the interval $(0,x_0]$ and strictly increasing in the interval $[x_0,1)$.
