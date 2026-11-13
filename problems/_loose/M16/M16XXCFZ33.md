---
tag: M16XXCFZ33
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 239 Open Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2210733
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54805
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230249
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-239-open/2008
    source: hf-ai-mo-aops
    label: 2008 239 Open Mathematical Olympiad
---
An odd natural number $k$ is given. Consider a composite number $n$ . We define $d(n)$ the set of proper divisors of number $n$ . If for some number $m$ , $d(m)$ is equal to $d(n) \cup \{ k \}$ , we call $n$ a good number. prove that there exist only finitely many good numbers.
(A proper divisor of a number is any divisor other than one and the number itself.)
