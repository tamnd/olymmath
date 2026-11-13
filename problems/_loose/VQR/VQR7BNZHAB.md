---
tag: VQR7BNZHAB
kind: problem
type: answer
answer: \frac{1}{2^{2n}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=168287
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's calculate the value of the following integral:

$$
\int_{0}^{\pi / 2^{n+1}} \sin x \cdot \cos x \cdot \cos 2 x \cdot \cos 2^{2} x \cdot \ldots \cdot \cos 2^{n-1} x d x
$$
