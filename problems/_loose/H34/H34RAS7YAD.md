---
tag: H34RAS7YAD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=122481
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A balance has two pans and a pointer, but no weights, and the pointer moves along a scale. When the weight on the left pan is $L$ and the weight on the right pan is $R$, the pointer points exactly to $R$ - $L$ on the scale.

There are $n(\geqslant 3)$ bags of coins, each containing $\frac{1}{2} n(n+1)+1$ coins. All coins have the same shape and color, and among them, $n-1$ bags contain genuine coins and 1 bag contains counterfeit coins. All genuine coins weigh the same, all counterfeit coins weigh the same, but the weight of genuine coins is different from that of counterfeit coins.

Placing coins in both pans and reading the number the pointer points to counts as one weighing. Prove that it is possible to determine which bag contains the counterfeit coins with just two weighings.
