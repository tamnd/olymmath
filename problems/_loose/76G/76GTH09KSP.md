---
tag: 76GTH09KSP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=165437
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given four integers: $a_{0}, b_{0}, c_{0}, d_{0}$. Form the following quadruple of numbers:

$$
a_{1}=\left|a_{0}-b_{0}\right|, b_{1}=\left|b_{0}-c_{0}\right|, c_{1}=\left|c_{0}-d_{0}\right|, d_{1}=\left|d_{0}-a_{0}\right|,
$$

then from these, by increasing each index by 1, form the quadruple $a_{2}, b_{2}, c_{2}, d_{2}$, and so on. Show that this process will eventually lead to a quadruple where all elements are 0.
