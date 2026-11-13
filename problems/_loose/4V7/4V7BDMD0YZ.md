---
tag: 4V7BDMD0YZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205584
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ f:[0,1]\longrightarrow\mathbb{R} $ be a continuous function such that
$$ \int_0^1 (x-1)f(x)dx =0. $$
Show that:

**a)** There exists $ a\in (0,1) $ such that $ \int_0^a xf(x)dx =0. $

**b)** There exists $ b\in (0,1) $ so that $ \int_0^b xf(x)dx=bf(b). $
