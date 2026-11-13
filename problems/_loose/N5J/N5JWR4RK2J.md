---
tag: N5JWR4RK2J
kind: problem
type: answer
answer: "118"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=124407
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a natural number, write $n$ as a sum of powers of $p$ (where $p$ is a positive integer greater than 1) and each power of $p$ can appear at most $p^{2}-1$ times, denote the total number of such decompositions as $C(n, p)$. For example: $8=4+4=4+2+2=4+2+1+1=2+2+2+1+1=8$, then $C(8,2)=5$. Note that in $8=4+1+1+1+1$, $1=2^{0}$ appears 4 times, which exceeds $2^{2}-1=3$, so it is not counted. Then $C(2002,17)=$ $ $ .
