---
tag: ETWNZC725Q
kind: problem
type: answer
answer: (,b)=(0,0)(,b)=(1,1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161254
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all pairs of real numbers $a$ and $b$ such that for all real numbers $x$ and $y$ the equality

$$
\lfloor a x+b y\rfloor+\lfloor b x+a y\rfloor=(a+b)\lfloor x+y\rfloor \text {. }
$$

holds.

(For a real number $t$, $\lfloor t\rfloor$ denotes the greatest integer not greater than $t$.)
