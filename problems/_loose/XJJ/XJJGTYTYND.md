---
tag: XJJGTYTYND
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Rioplatense Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3211962
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=27644
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228032
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rioplatense/2023
    source: hf-ai-mo-aops
    label: 2023 Rioplatense Mathematical Olympiad
---
The water city of Platense consists of many platforms and bridges between them. Each bridge connects two platforms and there is not two bridges connecting the same two platforms. The mayor wants to switch some bridges by a series of moves in the following way: if there are three platforms $A,B,C$ and bridges $AB$ and $AC$ (**no** bridge $BC$ ), he can switch bridge $AB$ to a bridge $BC$ .
A configuration of bridges is *good* if it is possible to go to any platfom from any platform using only bridges. Starting in a good configuration, prove that the mayor can reach any other good configuration, whose the quantity of bridges is the same, using the allowed moves.
