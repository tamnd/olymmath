---
tag: 2EQH6BTT32
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h110694
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44307
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240580
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2006
    source: hf-ai-mo-aops
    label: 2006 Iran MO (3rd Round)
---
For $A\subset\mathbb Z$ and $a,b\in\mathbb Z$ . We define $aA+b: =\{ax+b|x\in A\}$ . If $a\neq0$ then we calll $aA+b$ and $A$ to similar sets. In this question the Cantor set $C$ is the number of non-negative integers that in their base-3 representation there is no $1$ digit. You see $$C=(3C)\dot\cup(3C+2)\ \ \ \ \ \ (1)$$ (i.e. $C$ is partitioned to sets $3C$ and $3C+2$ ). We give another example $C=(3C)\dot\cup(9C+6)\dot\cup(3C+2)$ .

A representation of $C$ is a partition of $C$ to some similiar sets. i.e. $$C=\bigcup_{i=1}^{n}C_{i}\ \ \ \ \ \ (2)$$ and $C_{i}=a_{i}C+b_{i}$ are similar to $C$ .
We call a representation of $C$ a primitive representation iff union of some of $C_{i}$ is not a set similar and not equal to $C$ .
Consider a primitive representation of Cantor set. Prove that
a) $a_{i}>1$ .
b) $a_{i}$ are powers of 3.
c) $a_{i}>b_{i}$
d) (1) is the only primitive representation of $C$ .
