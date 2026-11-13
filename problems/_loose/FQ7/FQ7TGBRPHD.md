---
tag: FQ7TGBRPHD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=134507
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For 2017 real numbers $x_{1}, x_{2}, \ldots, x_{2017}$, prove that:
$$
\sum_{i=1}^{2017} \sum_{j=1}^{2017}\left|x_{i}+x_{j}\right| \geq 2017 \sum_{i=1}^{2017}\left|x_{i}\right|
$$
