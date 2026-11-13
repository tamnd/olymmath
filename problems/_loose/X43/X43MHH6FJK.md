---
tag: X43MHH6FJK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=232725
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For the function $f : Z^2_{\ge0} \to Z_{\ge 0}$ it is known that
$$f(0, j) = f(i, 0) = 1, \,\,\,\, \forall i, j \in N_0$$
$$f(i, j) = if (i, j - 1) + jf(i - 1, j),\,\,\,\, \forall i, j \in N$$
Prove that for every natural number $n$ the following inequality holds:
$$\sum_{0\le i+j\le n+1} f(i, j) \le 2 \left(\sum^n_{k=0}\frac{1}{k!}\right)\left(\sum^n_{p=1}p!\right)+ 3$$
