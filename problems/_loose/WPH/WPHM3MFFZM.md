---
tag: WPHM3MFFZM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=189487
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/North_Macedonia/train/0000.parquet#row=300
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$A=\{a, b, c\}$ is a set containing three positive integers. Prove that we can find a set $B \subset A$, $B=\{x, y\}$ such that for all odd positive integers $m, n$ we have

$$
10 \mid x^{m} y^{n}-x^{n} y^{m}
$$

(Tomi Dimovski)
