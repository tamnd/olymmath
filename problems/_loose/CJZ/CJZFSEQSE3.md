---
tag: CJZFSEQSE3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0001.parquet#row=212
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way/2016
    source: hf-mathnet
    label: Baltic Way Baltic Way 2016
---
Find all pairs $p, q$ of distinct primes, sets $D \subseteq \mathbb{R}$ and functions $f: D \to D$ fulfilling
$$
f^p(x) = x^p \text{and} f^q(x) = x^q
$$
for all $x \in D$. (Here, $f^n$ denotes the $n$'th iterate of $f$.)
