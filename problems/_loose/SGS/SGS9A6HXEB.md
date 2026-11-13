---
tag: SGS9A6HXEB
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154245
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Philippines/train/0000.parquet#row=44
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo
    source: hf-mathnet
    label: Philippines AREA STAGE
---
Find the value of $p$, where,
$$
p=\frac{16^{2}-4}{18 \times 13} \times \frac{16^{2}-9}{19 \times 12} \times \frac{16^{2}-16}{20 \times 11} \times \cdots \times \frac{16^{2}-64}{24 \times 7} .
$$
