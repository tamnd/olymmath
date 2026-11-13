---
tag: NGMATWTACA
kind: problem
type: answer
answer: (1,1,1),(1,2,2),(3,4,4),(1,1,3),(2,2,5),(1,2,4),(2,3,6),(4,5,10),(1,4,6),(2,6,9),(3,8,12),(6,14,21)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=109165
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let integers $a, b, c$ satisfy $1 \leqslant a \leqslant b \leqslant c$, and $a \mid b+c+1$, $b \mid c+a+1$, $c \mid a+b+1$. Find all triples $(a, b, c)$.
