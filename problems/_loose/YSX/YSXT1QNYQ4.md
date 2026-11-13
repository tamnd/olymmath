---
tag: YSXT1QNYQ4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Canadian Mathematical Olympiad Qualification
    url: https://artofproblemsolving.com/community/c6h2075084
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=18663
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220187
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ca-cmoqr/2020
    source: hf-ai-mo-aops
    label: 2020 Canadian Mathematical Olympiad Qualification
---
We define the following sequences:
• Sequence $A$ has $a_n = n$ .
• Sequence $B$ has $b_n = a_n$ when $a_n \not\equiv 0$ (mod 3) and $b_n = 0$ otherwise.
• Sequence $C$ has $c_n =\sum_{i=1}^{n} b_i$ .• Sequence $D$ has $d_n = c_n$ when $c_n \not\equiv 0$ (mod 3) and $d_n = 0$ otherwise.
• Sequence $E$ has $e_n =\sum_{i=1}^{n}d_i$ Prove that the terms of sequence E are exactly the perfect cubes.
