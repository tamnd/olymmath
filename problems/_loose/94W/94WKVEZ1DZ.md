---
tag: 94WKVEZ1DZ
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=162837
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Slovenia/train/0000.parquet#row=160
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: si-mo/2008
    source: hf-mathnet
    label: Slovenia Slovenija 2008
---
Find all prime numbers $p$ for which the polynomial

$$
q(x)=2 x^{3}-2 p x^{2}+(1-p) x+p
$$

has at least one rational root.
