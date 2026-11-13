---
tag: DAHJ3SE7BF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1991 French Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2560947
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39091
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236423
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst/1991
    source: hf-ai-mo-aops
    label: 1991 French Mathematical Olympiad
---
(a) Suppose that $x_n~(n\ge0)$ is a sequence of real numbers with the property that $x_0^3+x_1^3+\ldots+x_n^3=(x_0+x_1+\ldots+x_n)^2$ for each $n\in\mathbb N$ . Prove that for each $n\in\mathbb N_0$ there exists $m\in\mathbb N_0$ such that $x_0+x_1+\ldots+x_n=\frac{m(m+1)}2$ .
(b) For natural numbers $n$ and $p$ , we define $S_{n,p}=1^p+2^p+\ldots+n^p$ . Find all natural numbers $p$ such that $S_{n,p}$ is a perfect square for each $n\in\mathbb N$ .
