---
tag: MFZYZWTQY7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=232693
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a football tournament with $n\geq 2$ teams each two played a match. For a won match the victor gets 2 points and for a draw each one gets 1 point. In the final results there weren't two teams with equal amount of points.

It turned out that because of a mistake each match that was written in the results as won was actually a draw and each one that was written as draw was actually won. In the new ranking there were also no two teams with the same amount of points.

Find all n for which it is possible for the two rankings to be opposite of each other, that is the first team in the first ranking is actually the last one, the second team is pre-last and so on.
