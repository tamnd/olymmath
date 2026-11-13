---
tag: VF0KK5K3DQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1989 Irish Math Olympiad
    url: https://artofproblemsolving.com/community/c6h571650
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44694
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240932
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo/1989
    source: hf-ai-mo-aops
    label: 1989 Irish Math Olympiad
---
Let $a$ be a positive real number and let $b= \sqrt[3] {a+ \sqrt {a^{2}+1}} + \sqrt[3] {a- \sqrt {a^{2}+1}}$ .

Prove that $b$ is a positive integer if, and only if, $a$ is a positive integer of the form $\frac{1}{2} n(n^{2}+3)$ , for some positive integer $n$ .
