---
tag: 8QEX9RFZR8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=188360
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all functions $f: \mathbb{R} \rightarrow \mathbb{Z}$ for which

$$
\begin{aligned}
& f(x+y)<f(x)+f(y) \\
& f(f(x))=[x]+2
\end{aligned}
$$
