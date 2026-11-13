---
tag: FQQZ8R06DN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1997 Irish Math Olympiad
    url: https://artofproblemsolving.com/community/c6h286715
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44771
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241009
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo/1997
    source: hf-ai-mo-aops
    label: 1997 Irish Math Olympiad
---
Let $ S$ be the set of natural numbers $ n$ satisfying the following conditions:

$ (i)$ $ n$ has $ 1000$ digits,
$ (ii)$ all the digits of $ n$ are odd, and
$ (iii)$ any two adjacent digits of $ n$ differ by $ 2$ .

Determine the number of elements of $ S$ .
