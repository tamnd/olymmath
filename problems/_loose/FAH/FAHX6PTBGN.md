---
tag: FAHX6PTBGN
kind: problem
type: answer
answer: \frac{1+\sqrt{5}}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=87627
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a real number $x$, the following are defined: the greatest integer of $x$, $\lfloor x\rfloor$, is the greatest integer not greater than $x$, and the fractional part of $x$, $\{x\}=x-\lfloor x\rfloor$.

For example, $\lfloor 3.14\rfloor=3,\{3.14\}=0.14,\lfloor-2.4\rfloor=-3,\{-2.4\}=0.6$. Determine all positive numbers $x$ for which $\{x\},\lfloor x\rfloor$, and $x$ are three consecutive terms of a geometric sequence.
