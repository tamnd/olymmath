---
tag: Z7EDV6NNP7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=2408
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77925
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Soient $a_{1}, \ldots, a_{101}$ des réels appartenant à l'intervalle $[-2 ; 10]$ tels que

$$
a_{1}+\ldots+a_{101}=0
$$

Montrer que

$$
a_{1}^{2}+\ldots+a_{101}^{2} \leqslant 2020
$$
