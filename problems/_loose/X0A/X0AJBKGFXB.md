---
tag: X0AJBKGFXB
kind: problem
type: answer
answer: 1999\cdot2^{1996}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=171165
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $\mathrm{Az}\left(a_{i}\right)$ is defined as follows:

$$
a_{1}=1, a_{n}=\frac{n+1}{n-1}\left(a_{1}+\cdots+a_{n-1}\right)
$$

Determine the value of $a_{1998}$.
