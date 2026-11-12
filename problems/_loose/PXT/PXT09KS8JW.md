---
tag: PXT09KS8JW
kind: problem
type: answer
answer: "25"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=54546
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The city is a rectangular grid, with a five-story building in each cell. The renovation law allows choosing two adjacent cells (by side) with buildings and demolishing the building with fewer floors (or the same number). At the same time, the number of floors from the demolished building is added to the remaining building. What is the minimum number of buildings that can be left in the city using the renovation law, if the city has dimensions

a) $20 \times 20$ cells;

b) $50 \times 90$ cells
