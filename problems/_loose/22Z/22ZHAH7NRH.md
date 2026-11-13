---
tag: 22ZHAH7NRH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Serbia National Math Olympiad
    url: https://artofproblemsolving.com/community/c6h1417739
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=15994
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217681
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rs-smo/2017
    source: hf-ai-mo-aops
    label: 2017 Serbia National Math Olympiad
---
Let $a$ be a positive integer.Suppose that $\forall n$ , $\exists d$ , $d\not =1$ , $d\equiv 1\pmod n$ , $d\mid n^2a-1$ .Prove that $a$ is a perfect square.
