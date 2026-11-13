---
tag: T1EZ89RKM9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Pan-American Girls’ Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3130154
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=27356
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=227801
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pagmo/2023
    source: hf-ai-mo-aops
    label: 2023 Pan-American Girls’ Mathematical Olympiad
---
An integer $n \geq 2$ is said to be *tuanis* if, when you add the smallest prime divisor of $n$ and the largest prime divisor of $n$ (these divisors can be the same), you obtain an odd result. Calculate the sum of all *tuanis* numbers that are less or equal to $2023$.
