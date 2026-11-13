---
tag: XRB9A0FESV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=166676
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $a_{1}, a_{2} \ldots, a_{n}, \ldots$ is formed starting from any positive $a_{1}$ number using the following recursion:

$$
a_{n+1}=\left(2 a_{n}\right)^{1 / a_{n}}
$$

Does the limit $\lim a_{n}$ exist?
