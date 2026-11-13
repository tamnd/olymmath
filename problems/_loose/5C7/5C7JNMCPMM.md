---
tag: 5C7JNMCPMM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Taiwan TST Round 1
    url: https://artofproblemsolving.com/community/c6h1270066
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14821
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216605
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2016
    source: hf-ai-mo-aops
    label: 2016 Taiwan TST Round 1
---
Let $\mathbb{Z}^+$ denote the set of all positive integers. Find all surjective functions $f:\mathbb{Z}^+ \times \mathbb{Z}^+ \rightarrow \mathbb{Z}^+$ that satisfy all of the following conditions: for all $a,b,c \in \mathbb{Z}^+$ ,
(i) $f(a,b) \leq a+b$ ;
(ii) $f(a,f(b,c))=f(f(a,b),c)$ (iii)Both $\binom{f(a,b)}{a}$ and $\binom{f(a,b)}{b}$ are odd numbers.(where $\binom{n}{k}$ denotes the binomial coefficients)
