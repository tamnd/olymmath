---
tag: 3PHBCHAXC4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=10883
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187288
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/1993
    source: hf-numina-olympiads
    label: IberoAmerican_MO
---
We say that two non-negative integers are related if their sum uses only the digits 0 and 1 . For example 22 and 79 are related. Let A and B be two infinite sets of non-negative integers such that: (1) if a $\square \mathrm{A}$ and $\mathrm{b} \square \mathrm{B}$, then a and $\mathrm{b}$ are related, (2) if $\mathrm{c}$ is related to every member of A, then it belongs to $\mathrm{B},(3)$ if $\mathrm{c}$ is related to every member of $\mathrm{B}$, then it belongs to $\mathrm{A}$. Show that in one of the sets $\mathrm{A}, \mathrm{B}$ we can find an infinite number of pairs of consecutive numbers.
