---
tag: Q8CMWKE1KD
kind: problem
type: answer
answer: '{10,45,12},{20,15,18},{20,45,6}'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75023
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all triples of natural numbers $a, b, c$ for which the set equality

$$
\{(a, b),(a, c),(b, c),[a, b],[a, c],[b, c]\}=\{2,3,5,60,90,180\},
$$

holds, where $(x, y)$ and $[x, y]$ denote the greatest common divisor and the least common multiple of numbers $x$ and $y$, respectively.
