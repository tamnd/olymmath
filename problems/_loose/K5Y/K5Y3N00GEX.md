---
tag: K5Y3N00GEX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212487
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose a function $f(x)$ is continuous on $[-1,\ 1]$ and satisfies the condition :

1) $f(-1)\geq f(1).$

2) $x+f(x)$ is non decreasing function.

3) $\int_{-1}^ 1 f(x)\ dx=0.$

Show that $\int_{-1}^1 f(x)^2dx\leq \frac 23.$
