---
tag: XTFDABPDCF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=83270
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that if $k \leq \min (m, n)$ then:

$$
\binom{n}{0}\binom{m}{k}+\binom{n}{1}\binom{m}{k-1}+\ldots+\binom{n}{k}\binom{m}{0}=\binom{m+n}{k}
$$
