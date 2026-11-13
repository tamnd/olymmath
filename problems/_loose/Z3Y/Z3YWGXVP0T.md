---
tag: Z3YWGXVP0T
kind: problem
type: answer
answer: "-4"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=97731
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/China/train/0001.parquet#row=209
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-league
    source: hf-mathnet
    label: China China Mathematical Competition
---
Let the function $f(x)$ have the domain $D=(-\infty, 0) \bigcup(0,+\infty)$, and for any $x \in D$, it holds that $f(x)=\frac{f(1) \cdot x^{2}+f(2) \cdot x-1}{x}$, then the sum of all zeros of $f(x)$ is $ $ .
