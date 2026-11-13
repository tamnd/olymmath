---
tag: VX53X7JVA9
kind: problem
type: answer
answer: \frac{(n-1)2^{n}+1}{(n+1)}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91520
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove: (1) $\sum_{k=1}^{n} \frac{k}{k+1} C_{n}^{k}=\frac{(n-1) \cdot 2^{n}+1}{n+1}$;
(2) $\sum_{k=1}^{n} \frac{(-1)^{k-1} k}{k+1} C_{n}^{k}=\frac{1}{n+1}$.
