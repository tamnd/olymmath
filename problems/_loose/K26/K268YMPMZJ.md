---
tag: K268YMPMZJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220591
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A tuple of real numbers $(a_1, a_2, \dots, a_m)$ is called *stable *if for each $k \in \{1, 2, \cdots, m-1\}$,
$$ \left \vert \frac{a_1+ a_2 + \cdots + a_k}{k} - a_{k+1} \right \vert < 1. $$
Does there exist a stable $n$-tuple $(x_1, x_2, \dots, x_n)$ such that for any real number $x$, the $(n+1)$-tuple $(x, x_1, x_2, \dots, x_n)$ is not stable?
