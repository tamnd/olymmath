---
tag: 3NPHNFZ5BK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33495
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that if $\mathrm{P}(B)>0$, then

$$
\mathrm{P}(A \mid B)=\mathrm{P}(A \mid B C) \mathrm{P}(C \mid B)+\mathrm{P}(A \mid B \bar{C}) \mathrm{P}(\bar{C} \mid B)
$$
