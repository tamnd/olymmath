---
tag: QNQA8KMTE1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=170346
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a monotonic function $f: R \rightarrow R$ and constants $c_{1}, c_{2}>0$, it holds that

$$
f(x)+f(y)-c_{1} \leq f(x+y) \leq f(x)+f(y)+c_{2}
$$

for all real numbers $x, y$. Show that there exists a number $k$ such that $f(x)-k x$ is a bounded function.
