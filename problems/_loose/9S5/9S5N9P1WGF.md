---
tag: 9S5N9P1WGF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161146
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A computer chip consists of $n$ transistors. Some transistors are connected by wires. For any two transistors $x$ and $y$, if $x$ and $y$ are not connected by a wire, then the total number of wires originating from $x$ and $y$ is at least $n-1$. Prove that the total number of wires is at least $\frac{\binom{n}{2}}{2}$.
