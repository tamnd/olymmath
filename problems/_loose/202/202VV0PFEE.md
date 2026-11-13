---
tag: 202VV0PFEE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Olympic Revenge
    url: https://artofproblemsolving.com/community/c6h3244399
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2020
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231956
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: olympic-revenge/2024
    source: hf-ai-mo-aops
    label: 2024 Olympic Revenge
---
Davi and George are taking a city tour through Fortaleza, with Davi initially leading. Fortaleza is organized like an $n \times n$ grid. They start in one of the grid's squares and can move from one square to another adjacent square via a street (for each pair of neighboring squares on the grid, there is a street connecting them). Some streets are dangerous. If Davi or George pass through a dangerous street, they get scared and swap who is leading the city tour. Their goal is to pass through every block of Fortaleza exactly once. However, if the city tour ends with George in command, the entire world becomes unemployed and everyone starves to death. Given that there is at least one street that is not dangerous, prove that Davi and George can achieve their goal without everyone dying of hunger.
