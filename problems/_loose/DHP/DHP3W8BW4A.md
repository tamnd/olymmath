---
tag: DHP3W8BW4A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1955 Moscow Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1898323
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=56787
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=62071
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-moscow/1955
    source: hf-ai-mo-aops
    label: 1955 Moscow Mathematical Olympiad
---
Inside $\vartriangle ABC$ , there is fixed a point $D$ such that $AC - DA > 1$ and $BC - BD > 1$ . Prove that $EC - ED > 1$ for any point $E$ on segment $AB$ .
