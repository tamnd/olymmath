---
tag: NJA2YQZFZC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=38700
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Nim game.) There are three piles of stones. Two players take turns taking any number of stones from any one pile, but only from one. The player who takes the last stone wins.

Let's write the number of stones in the piles in binary: $a_{0}+a_{1} \cdot 2+a_{2} \cdot 2^{2}+\ldots, b_{0}+b_{1} \cdot 2+b_{2} \cdot 2^{2}+\ldots, c_{0}+c_{1} \cdot 2+c_{2} \cdot 2^{2}+\ldots$ Let $d_{i}=a_{i}+b_{i}+c_{i}$.
a) Prove that if among the numbers $d_{i}$ there is at least one odd number, then the player making the first move can always ensure a win.

b) Prove that if all the numbers $d_{i}$ are even, then the second player can always ensure a win.
