---
tag: VTM69K6ADB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=140560
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any positive integer $n$, prove:
$$
\sum_{k=0}^{n} C_{n}^{k} \cdot 2^{k} \cdot C_{n-k}^{[(n-k) / 2]}=C_{2 n+1}^{n}
$$

where $C_{0}^{0}=1,[(n-k) / 2]$ represents the integer part of $(n-k) / 2$.
