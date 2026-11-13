---
tag: GSQ7SMRJ14
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214840
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $k \in \mathbb{N}$, let $x_k$ denote the nearest integer to $\sqrt k$. Show that for each $m \in \mathbb {N}$,
$$\sum_{k=1}^{m} \frac{1}{x_k} = f(m)+ \frac{m}{f(m)+1}$$,
where $f(m)$ is the integer part of $\frac{\sqrt{4m-3}-1}{2}$
