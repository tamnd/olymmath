---
tag: 7WKWTCX590
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250698
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=272
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc
    source: hf-mathnet
    label: Saudi Arabia SAMC
---
Let $X$ be a set of rational numbers satisfying the following two conditions:
(a) The set $X$ contains at least two elements,
(b) For any $x, y$ in $X$, if $x \ne y$ then there exists $z$ in $X$ such that either $\left| \frac{x- z}{y - z} \right|= 2$ or $\left| \frac{y -z}{x - z} \right|= 2$ .
Prove that $X$ contains infinitely many elements.
