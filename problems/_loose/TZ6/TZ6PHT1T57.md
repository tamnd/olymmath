---
tag: TZ6PHT1T57
kind: problem
type: answer
answer: "999999000"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=147378
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any real number $x,\lfloor x\rfloor$ denotes the largest integer less than or equal to $x$. For example, $\lfloor 4.2\rfloor=4$ and $\lfloor 0.9\rfloor=0$.

If $S$ is the sum of all integers $k$ with $1 \leq k \leq 999999$ and for which $k$ is divisible by $\lfloor\sqrt{k}\rfloor$, then $S$ equals
(A) 999500000
(D) 998999500
(B) 999000000
(C) 999999000
