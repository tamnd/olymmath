---
tag: DWN4ZSHX3X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Malaysia National Olympiad
    url: https://artofproblemsolving.com/community/c6h409772
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5231
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207382
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: my-omk/2010
    source: hf-ai-mo-aops
    label: 2010 Malaysia National Olympiad
---
Find the number of different pairs of positive integers $(a,b)$ for which $a+b\le100$ and $$\dfrac{a+\frac{1}{b}}{\frac{1}{a}+b}=10$$
