---
tag: T4PC0HT5E7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Olympic Revenge
    url: https://artofproblemsolving.com/community/c6h130895
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=32877
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231924
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: olympic-revenge/2007
    source: hf-ai-mo-aops
    label: 2007 Olympic Revenge
---
Let $a$ , $b$ , $n$ be positive integers with $a,b > 1$ and $\gcd(a,b) = 1$ . Prove that $n$ divides $\phi\left(a^{n}+b^{n}\right)$ .
