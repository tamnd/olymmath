---
tag: GS9C8FDYBV
kind: problem
type: answer
answer: \frac{n}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90345
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $z=\cos 2 \pi / n+i \sin 2 \pi / n$ where $n$ is a positive odd integer. Prove that

$$
\frac{1}{1+z}+\frac{1}{1+z^{2}}+\frac{1}{1+z^{3}}+\cdots+\frac{1}{1+z^{n}}=\frac{n}{2}
$$
