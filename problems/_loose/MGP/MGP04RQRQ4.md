---
tag: MGP04RQRQ4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=173690
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's prove that the expression

$$
\left(10^{n}-10^{n-1}\right)+\left(10^{n}-10^{n-2}\right)+\ldots+\left(10^{n}-10^{0}\right)
$$

for every positive integer $ n $ results in a number where the highest place value digit (or digits) is provided by the number $(n-1)$, followed by $ n-1 $ eights, and a nine in the units place.
