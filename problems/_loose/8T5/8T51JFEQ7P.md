---
tag: 8T51JFEQ7P
kind: problem
type: answer
answer: \binom{2n}{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251272
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let there be given real numbers $x_i>1~(i=1,2,\ldots,2n)$. Prove that the interval $[0,2]$ contains at most $\binom{2n}n$ sums of the form $\alpha_1x_1+\ldots+\alpha_{2n}x_{2n}$, where $\alpha_i\in\{-1,1\}$ for all $i$.
