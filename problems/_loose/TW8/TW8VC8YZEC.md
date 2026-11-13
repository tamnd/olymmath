---
tag: TW8VC8YZEC
kind: problem
type: answer
answer: "82"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=264725
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Evin's calculator is broken and can only perform $3$ operations:
Operation $1$: Given a number $x$, output $2x$.
Operation $2$: Given a number $x$, output $4x +1$.
Operation $3$: Given a number $x$, output $8x +3$.
After initially given the number $0$, how many numbers at most $128$ can he make?
