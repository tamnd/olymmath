---
tag: 3QAP7CMGEA
kind: problem
type: answer
answer: \frac{2018\times5^{2017}}{5^{2018}-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=133711
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Calculate: $\sum_{k=0}^{2017} \frac{5+\cos \frac{\pi k}{1009}}{26+10 \cos \frac{\pi k}{1009}}$. [4] (2018, Carnegie Mellon Informatics and Mathematics Competition)
