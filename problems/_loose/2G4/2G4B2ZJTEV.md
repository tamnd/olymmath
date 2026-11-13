---
tag: 2G4B2ZJTEV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=1504
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85296
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Bewijs dat

$$
\sum_{n=0}^{2013} \frac{4026!}{(n!(2013-n)!)^{2}}
$$

het kwadraat van een geheel getal is.
