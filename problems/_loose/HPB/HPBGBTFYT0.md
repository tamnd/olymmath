---
tag: HPBGBTFYT0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h88821
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54575
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248076
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/2006
    source: hf-ai-mo-aops
    label: 2006 Romania Team Selection Test
---
Let $x_1=1$ , $x_2$ , $x_3$ , $\ldots$ be a sequence of real numbers such that for all $n\geq 1$ we have $$ x_{n+1} = x_n + \frac 1{2x_n} . $$ Prove that $$ \lfloor 25 x_{625} \rfloor = 625 . $$
