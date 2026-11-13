---
tag: W9ECXEHCAA
kind: problem
type: answer
answer: f()=k
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=123556
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given that $C$ is a fixed positive integer. Find all functions $f: \mathbf{Z}_{+} \rightarrow \mathbf{Z}_{+}$, such that for all positive integers $a, b$ satisfying $a+b>C$, we have
$$
(a+f(b)) \mid\left(a^{2}+b f(a)\right) .
$$
