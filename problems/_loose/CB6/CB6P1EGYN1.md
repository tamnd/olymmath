---
tag: CB6P1EGYN1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33555
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that for any function $f=f(\eta)$, the conditional expectation $\mathrm{E}(\xi \mid \eta)$ has the following property:

$$
\mathrm{E}[f(\eta) \mathrm{E}(\xi \mid \eta)]=\mathrm{E}[\xi f(\eta)]
$$
