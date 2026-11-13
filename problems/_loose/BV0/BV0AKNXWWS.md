---
tag: BV0AKNXWWS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=10930
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187333
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/2002
    source: hf-numina-olympiads
    label: IberoAmerican_MO
---
The sequence $a_{n}$ is defined as follows: $a_{1}=56, a_{n+1}=a_{n}-1 / a_{n}$. Show that $a_{n}<0$ for some $n$ such that $0<\mathrm{n}<2002$.
