---
tag: 1DWDFM82Z8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178399
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0002.parquet#row=224
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2018
    source: hf-mathnet
    label: Romania 2018 Romanian Mathematical Olympiad
---
Let the sequence $\left(a_{n}\right)_{n \geq 1}$ have the properties $a_{n}>1$ and $a_{n+1}^{2} \geq a_{n} a_{n+2}$ for any $n \geq 1$. Show that the sequence $\left(x_{n}\right)_{n \geq 1}$ given by $x_{n}=\log _{a_{n}} a_{n+1}$ for $n \geq 1$ is convergent and calculate its limit.
