---
tag: SHDXJGGDHZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 India IMOTC
    url: https://artofproblemsolving.com/community/c6h3330152
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1772
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/India/train/0000.parquet#row=260
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2024
    source: hf-ai-mo-aops
    label: 2024 India IMOTC
---
Find all functions $f : \mathbb{R} \to \mathbb{R}$ such that for all real numbers $a, b, c$ , we have
$$
f(a+b+c)f(ab+bc+ca) - f(a)f(b)f(c) = f(a+b)f(b+c)f(c+a).
$$

*Proposed by Mainak Ghosh and Rijul Saini*
