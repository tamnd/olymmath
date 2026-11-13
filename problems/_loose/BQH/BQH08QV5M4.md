---
tag: BQH08QV5M4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=10895
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187299
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/1996
    source: hf-numina-olympiads
    label: IberoAmerican_MO
---
$\mathrm{n}=\mathrm{k}^{2}-\mathrm{k}+1$, where $\mathrm{k}$ is a prime plus one. Show that we can color some squares of an $\mathrm{n} \mathrm{x}$ board black so that each row and column has exactly $\mathrm{k}$ black squares, but there is no rectangle with sides parallel to the sides of the board which has its four corner squares black.
