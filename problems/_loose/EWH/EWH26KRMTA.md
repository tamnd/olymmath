---
tag: EWH26KRMTA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=11248
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=227
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=128
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: jbmo-sl/2020
    source: hf-numina-olympiads
    label: JBMO-SL
  - at: sa-samc
    source: hf-mathnet
    label: Saudi Arabia Saudi Arabian Mathematical Competitions
---
Find all positive integers $a, b, c$ and $p$, where $p$ is a prime number, such that

$$
73 p^{2}+6=9 a^{2}+17 b^{2}+17 c^{2}
$$
