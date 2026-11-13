---
tag: S0FTSRFBC9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=164522
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that for every positive integer $n$,

$$
\frac{|\sin n|}{n}+\frac{|\sin (n+1)|}{n+1}+\ldots+\frac{|\sin 2 n|}{2 n}>\frac{1}{6}
$$

(The argument of the sine function is measured in radians.)
