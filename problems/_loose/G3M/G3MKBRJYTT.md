---
tag: G3MKBRJYTT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=146497
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given that $X$ is an $n$-element set, $\Phi$ is a family of 3-element subsets of the $n$-element set $X$ with the following property: any two subsets have at most one common element. Prove: there exists a subset $M$ of the $n$-element set $X$, satisfying:
(1) $M$ does not contain any set from the family $\Phi$;
(2) The number of elements in $M$ is at least $[\sqrt{2 n}]$ (where $[x]$ denotes the greatest integer not exceeding the real number $x$).
