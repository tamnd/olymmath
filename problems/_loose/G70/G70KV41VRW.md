---
tag: G70KV41VRW
kind: problem
type: answer
answer: \sum_{k=0}^{[\frac{n-1}{2}]}(\frac{n-2k}{n}C_{n}^{k})^{2}=\frac{1}{n}C_{2n-2}^{n-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=105724
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove: $\sum_{k=0}^{\left[\frac{n-1}{2}\right]}\left(\frac{n-2 k}{n} C_{n}^{k}\right)^{2}=\frac{1}{n} C_{2 n-2}^{n-1}$.
