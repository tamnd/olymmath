---
tag: TH72MHVBTS
kind: problem
type: answer
answer: (1,1,1),(1,1,2),(1,3,2),(3,5,4)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=190939
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Austria/train/0000.parquet#row=198
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: at-oemo
    source: hf-mathnet
    label: Austria Austrian Mathematical Olympiad
---
Determine all triples $(x, y, z)$ of positive integers for which

$$
x \mid (y+1), y \mid (z+1) \text{and} z \mid (x+1)
$$

hold.

(Walther Janous)
