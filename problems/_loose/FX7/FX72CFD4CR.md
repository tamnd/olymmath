---
tag: FX72CFD4CR
kind: problem
type: answer
answer: "864"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=235717
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A three-digit $\overline{abc}$ number is called *Ecuadorian * if it meets the following conditions:
$\bullet$ $\overline{abc}$ does not end in $0$.
$\bullet$ $\overline{abc}$ is a multiple of $36$.
$\bullet$ $\overline{abc} - \overline{cba}$ is positive and a multiple of $36$.
Determine all the Ecuadorian numbers.
