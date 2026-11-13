---
tag: VCT8DTNEZM
kind: problem
type: answer
answer: "15"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=103175
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/China/train/0001.parquet#row=52
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-league
    source: hf-mathnet
    label: China China Mathematical Competition
---
Given $a_{n}=C_{200}^{n} \cdot(\sqrt[3]{6})^{200-n} \cdot\left(\frac{1}{\sqrt{2}}\right)^{n}(n=1,2, \cdots, 95)$, the number of integer terms in the sequence $\left\{a_{n}\right\}$ is $ $.
