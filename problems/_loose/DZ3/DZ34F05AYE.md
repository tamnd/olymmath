---
tag: DZ34F05AYE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1994 Iran MO (2nd round)
    url: https://artofproblemsolving.com/community/c6h379493
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44031
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240304
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/1994
    source: hf-ai-mo-aops
    label: 1994 Iran MO (2nd round)
---
Let $\overline{a_1a_2a_3\ldots a_n}$ be the representation of a $n-$ digits number in base $10.$ Prove that there exists a one-to-one function like $f : \{0, 1, 2, 3, \ldots, 9\} \to \{0, 1, 2, 3, \ldots, 9\}$ such that $f(a_1) \neq 0$ and the number $\overline{ f(a_1)f(a_2)f(a_3) \ldots f(a_n) }$ is divisible by $3.$
