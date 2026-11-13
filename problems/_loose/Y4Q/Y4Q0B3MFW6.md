---
tag: Y4Q0B3MFW6
kind: problem
type: answer
answer: "2008"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=160412
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p(x)$ be a polynomial with real coefficients such that for all real $x$,
$$
2(1+p(x))=p(x-1)+p(x+1)
$$
and $p(0)=8 \cdot p(2)=32$. Determine the value of $p(40)$.
