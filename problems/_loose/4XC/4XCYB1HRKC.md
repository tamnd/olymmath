---
tag: 4XCYB1HRKC
kind: problem
type: answer
answer: \frac{1}{2}\sum_{k=1}^{n}\frac{1}{k}-\frac{n}{n+1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=165523
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's write the following sum in a simpler form:

$$
S=\sum_{i=1}^{n} \frac{n-i}{(2 i+1)(n+i+1)} .
$$
