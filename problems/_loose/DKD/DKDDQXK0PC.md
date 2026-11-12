---
tag: DKDDQXK0PC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=8279
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Each of the $n$ chemists in the laboratory has 1 kg of a certain chemical reagent (different chemists have different reagents). The chemists send packages to each other. No two packages can be sent simultaneously. Upon receiving a package, a chemist immediately adds all its contents to their laboratory. When a chemist sends a package to another chemist, they put half of each of the reagents they have into it.

After sending a certain number of packages, it turned out that each chemist now has all $p$ reagents (perhaps in very small quantities). Moreover, no chemist received any foreign reagent more than once. Some chemists received packages that contained, among other things, their own reagent. Prove that there were at least $n-1$ such chemists.
