---
tag: TZARNVDS8Q
kind: problem
type: answer
answer: 0.399999<p_{100}<0.400001
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=167976
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a game similar to "Ki nevet a végén?", a doll must take at least 100 steps. At each step, the doll can move forward by 1, 2, 3, or 4 spaces, chosen randomly. Let $p_{n}$ denote the probability that the doll lands on the $n$-th space. (The doll starts from the 0th space.) Prove that $0.399999 < p_{100} < 0.400001$.
