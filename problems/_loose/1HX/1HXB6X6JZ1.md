---
tag: 1HXB6X6JZ1
kind: problem
type: answer
answer: \frac{2n}{n+1}<2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=182568
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
It is to prove the validity of the inequality for all natural numbers $n \geq 2$:

$$
\prod_{i=2}^{n}\left(1+\frac{1}{i^{2}}\right)<2
$$
