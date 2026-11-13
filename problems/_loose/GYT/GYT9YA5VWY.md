---
tag: GYT9YA5VWY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=2472
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77638
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0000.parquet#row=159
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst
    source: hf-mathnet
    label: France Olympiades Françaises de Mathématiques
---
Soient $x$, y et $z$ des réels strictement positifs tels que

$$
x+y+z \geqslant \frac{1}{x}+\frac{1}{y}+\frac{1}{z}
$$

Montrer que

$$
\frac{x}{y}+\frac{y}{z}+\frac{z}{x} \geqslant \frac{1}{x y}+\frac{1}{y z}+\frac{1}{z x}
$$
