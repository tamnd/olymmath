---
tag: 1WN3AKSB39
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=10909
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187313
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/1998
    source: hf-numina-olympiads
    label: IberoAmerican_MO
---
$\mathrm{P}_{1}, \mathrm{P}_{2}, \ldots, \mathrm{P}_{\mathrm{n}}$ are points in the plane and $\mathrm{r}_{1}, \mathrm{r}_{2}, \ldots, \mathrm{r}_{\mathrm{n}}$ are real numbers such that the distance between $P_{i}$ and $P_{j}$ is $r_{i}+r_{j}$ (for $i$ not equal to $j$ ). Find the largest $n$ for which this is possible.
