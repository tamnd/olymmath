---
tag: D48BFWY8DE
kind: problem
type: answer
answer: 3^27+3\cdot7625597484990
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=20804
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $a_{n}$ is constructed as follows: $a_{0}=12, a_{2 n+1}=a_{2 n}-2, a_{2 n}=3 a_{2 \text { n-1 }}$. Find $a_{50}$.

If the answer requires an exponentiation operation, use the symbol "^"
