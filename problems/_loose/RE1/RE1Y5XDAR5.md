---
tag: RE1Y5XDAR5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=99773
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Initially, all the squares of an $8 \times 8$ grid are white. You start by choosing one of the squares and coloring it gray. After that, you may color additional squares gray one at a time, but you may only color a square gray if it has exactly 1 or 3 gray neighbors at that moment (where a neighbor is a square sharing an edge). For example, the configuration below (of a smaller $3 \times 4$ grid) shows a situation where six squares have been colored gray so far. The squares that can be colored at the next step are marked with a dot.

Is it possible to color all the squares gray? Justify your answer.
