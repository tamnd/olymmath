---
tag: WRSCGRWE0G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Indonesia MO
    url: https://artofproblemsolving.com/community/c6h3144853
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=43593
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240044
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: id-osn/2023
    source: hf-ai-mo-aops
    label: 2023 Indonesia MO
---
Determine all functions $f : \mathbb{R} \to \mathbb{R}$ such that the following equation holds for every real $x,y$ :
$$ f(f(x) + y) = \lfloor x + f(f(y)) \rfloor. $$**Note:** $\lfloor x \rfloor$ denotes the greatest integer not greater than $x$ .
