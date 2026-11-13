---
tag: N9MC8PSEZH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=11033
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=172
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/JBMO/train/0000.parquet#row=115
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: jbmo-sl/2004
    source: hf-numina-olympiads
    label: JBMO-SL
  - at: jbmo
    source: hf-mathnet
    label: JBMO Junior Balkan Mathematical Olympiad
---
Find all four digit numbers A such that

$$
\frac{1}{3} A+2000=\frac{2}{3} \bar{A}
$$

where $\bar{A}$ is the number with the same digits as $A$, but written in opposite order. (For example, $\overline{1234}=4321$.)
