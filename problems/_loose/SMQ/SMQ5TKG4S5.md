---
tag: SMQ5TKG4S5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179515
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0001.parquet#row=358
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania 67th Romanian Mathematical Olympiad
---
Consider the set

$$
M=\left\{x_{1}+2 x_{2}+3 x_{3}+\ldots+2015 x_{2015} \mid x_{1}, x_{2}, \ldots, x_{2015} \in\{-2,3\}\right\}
$$

Show that $2015 \in M$ and $2016 \notin M$.
