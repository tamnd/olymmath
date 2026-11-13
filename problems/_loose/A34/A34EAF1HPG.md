---
tag: A34EAF1HPG
kind: problem
type: answer
answer: "3789"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=110049
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The function $f: \mathrm{N}^{+} \rightarrow \mathrm{N}^{+}$ satisfies
(1) $f(n+1)>f(n)$,
(2) $f[f(n)]=3 n$.

Find $f(1992)$.
