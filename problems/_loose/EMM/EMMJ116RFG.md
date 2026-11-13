---
tag: EMMJ116RFG
kind: problem
type: answer
answer: G(n)=[\frac{\sqrt{5}-1}{2}(n+1)]
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=138945
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The seventy-sixth question: The function $G(n): N \rightarrow N$ satisfies $G(0)=0, G(n)=n-G(G(n-1))$, find all $G(n)$ that satisfy the condition.
