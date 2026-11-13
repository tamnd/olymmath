---
tag: BG8KCN1MER
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=102672
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For all positive integers $n$ and all real numbers $x (x \neq 0, -1, \cdots, -n)$, we have
$$
\sum_{k=0}^{n}(-1)^{k} C_{n}^{k} \frac{x}{x+k}=\frac{n!}{(x+1)(x+2) \cdots(x+n)}
$$
