---
tag: BGTHEETCH6
kind: problem
type: answer
answer: \frac{485}{970}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=184322
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
From the digits $0,1,2,3,4,5,6,7,8,9$, two fractions $\frac{a}{b}$ and $\frac{c}{d}$ are to be formed such that each digit is used exactly once in the digit representations of the four natural numbers $a, b, c, d$. For the fractions formed, $\frac{a}{b}+\frac{c}{d}=1$ should hold. In the first of the two fractions, $a=13$ and $b=26$ should be chosen.

Prove that there is exactly one way to choose the numerator $c$ and the denominator $d$ of the second fraction such that all the given conditions are satisfied! Give this second fraction!
