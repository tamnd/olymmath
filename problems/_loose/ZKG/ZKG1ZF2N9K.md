---
tag: ZKG1ZF2N9K
kind: problem
type: answer
answer: (25,125,16,32)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89050
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Croatia/train/0001.parquet#row=37
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hr-mo
    source: hf-mathnet
    label: Croatia Croatia Mathematical Competitions
---
Determine all quadruples $(a, b, c, d)$ of natural numbers such that

$$
a^{3}=b^{2}, c^{5}=d^{4} \mathrm{and} a-c=9
$$
