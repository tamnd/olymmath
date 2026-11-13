---
tag: T7HBQ8N81A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2003 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h375866
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55809
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249210
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/2003
    source: hf-ai-mo-aops
    label: 2003 All-Russian Olympiad
---
Let $f(x)$ and $g(x)$ be polynomials with non-negative integer coefficients, and let m be the largest coefficient of $f.$ Suppose that there exist natural numbers $a < b$ such that $f(a) = g(a)$ and $f(b) = g(b)$ . Show that if $b > m,$ then $f = g.$
