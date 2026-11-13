---
tag: HQB26NYGHX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=84621
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the operation that consists of looking at a sequence made up of 0s and 1s, and either adding or removing a sequence of the form $X X X$ where $X$ is a sequence of 0s and 1s. For example, if we start with 1110001, we can remove the sequences 111 or 000, or add sequences like $101010,000,110110110$ wherever we want. If we start with 10, can we reach 01?
