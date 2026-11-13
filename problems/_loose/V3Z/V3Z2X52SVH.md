---
tag: V3Z2X52SVH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Olympic Revenge
    url: https://artofproblemsolving.com/community/c6h2889895
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=32905
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231952
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: olympic-revenge/2022
    source: hf-ai-mo-aops
    label: 2022 Olympic Revenge
---
positive real $C$ is $n-vengeful$ if it is possible to color the cells of an $n \times n$ chessboard such that:

i) There is an equal number of cells of each color.
ii) In each row or column, at least $Cn$ cells have the same color.

a) Show that $\frac{3}{4}$ is $n-vengeful$ for infinitely many values of $n$ .

b) Show that it does not exist $n$ such that $\frac{4}{5}$ is $n-vengeful$ .
