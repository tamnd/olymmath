---
tag: 38BFVR4PTB
kind: problem
type: answer
answer: I_{n+1} = \frac{e}{2} - n I_n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207939
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(1) Evaluate $ \int_0^1 xe^{x^2}dx$.

(2) Let $ I_n=\int_0^1 x^{2n-1}e^{x^2}dx$. Express $ I_{n+1}$ in terms of $ I_n$.
