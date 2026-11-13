---
tag: SYQ86A6YZS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265353
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We say that a *special word* is any sequence of letters **containing a vowel**. How many ordered triples of special words $(W_1,W_2,W_3)$ have the property that if you concatenate the three words, you obtain a rearrangement of "aadvarks"?

For example, the number of triples of special words such that the concatenation is a rearrangement of ``adaa" is $6$, and all of the possible triples are:

(da,a,a),(ad,a,a),(a,da,a),(a,ad,a),(a,a,da),(a,a,ad).

*2021 CCA Math Bonanza Team Round #5*
