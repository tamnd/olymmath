---
tag: 2PSAAWMF01
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1987 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h37425
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35639
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234160
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/1987
    source: hf-ai-mo-aops
    label: 1987 China Team Selection Test
---
A closed recticular polygon with 100 sides (may be concave) is given such that it's vertices have integer coordinates, it's sides are parallel to the axis and all it's sides have odd length. Prove that it's area is odd.
