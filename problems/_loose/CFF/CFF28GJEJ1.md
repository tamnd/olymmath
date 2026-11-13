---
tag: CFF28GJEJ1
kind: problem
type: answer
answer: "n"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204538
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $M \geq 1$ be a real number. Determine all natural numbers $n$ for which there exist distinct natural numbers $a$, $b$, $c > M$, such that
$n = (a,b) \cdot (b,c) + (b,c) \cdot (c,a) + (c,a) \cdot (a,b)$
(where $(x,y)$ denotes the greatest common divisor of natural numbers $x$ and $y$).
