---
tag: BEPFXYAHNQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=84982
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that for all integers $n, k, r, s$ we have:

$$
\binom{n}{k}\binom{k}{r}\binom{r}{s}=\binom{n}{s}\binom{n-s}{r-s}\binom{n-r}{k-r}
$$
