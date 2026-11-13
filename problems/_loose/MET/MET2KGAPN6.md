---
tag: MET2KGAPN6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1935 Moscow Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1877165
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=56506
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249404
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-moscow/1935
    source: hf-ai-mo-aops
    label: 1935 Moscow Mathematical Olympiad
---
Denote by $M(a, b, c, . . . , k)$ the least common multiple and by $D(a, b, c, . . . , k)$ the greatest common divisor of $a, b, c, . . . , k$ . Prove that:

a) $M(a, b)D(a, b) = ab$ ,

b) $\frac{M(a, b, c)D(a, b)D(b, c)D(a, c)}{D(a, b, c)}= abc$ .
