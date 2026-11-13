---
tag: ADZRFA0FBV
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90539
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Evaluate the sum

$$
\sum_{k=1}^{\infty}\left(\prod_{i=1}^{k} \frac{P_{i}-1}{P_{i+1}}\right)=\frac{1}{3}+\frac{1}{3} \cdot \frac{2}{5}+\frac{1}{3} \cdot \frac{2}{5} \cdot \frac{4}{7}+\frac{1}{3} \cdot \frac{2}{5} \cdot \frac{4}{7} \cdot \frac{6}{11}+\ldots
$$

where $P_{n}$ denotes the $n^{\text {th }}$ prime number.
