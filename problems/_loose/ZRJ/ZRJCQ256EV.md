---
tag: ZRJCQ256EV
kind: problem
type: answer
answer: 2^{2008}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=76014
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We call a finite set of natural numbers nice if in the decimal representation of these numbers, we need an even number of each represented digit to write them down $v$ times. Examples of nice sets include $\{11,13,31\},\{10,100,110\}$, and also the empty set. Determine how many nice subsets the set $\{1,2, \ldots, 2018\}$ has. (Patrik Bak)
