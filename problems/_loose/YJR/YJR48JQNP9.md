---
tag: YJR48JQNP9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1990 Iran MO (2nd round)
    url: https://artofproblemsolving.com/community/c6h380323
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44007
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240280
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/1990
    source: hf-ai-mo-aops
    label: 1990 Iran MO (2nd round)
---
**(a)** For every positive integer $n$ prove that
$$1+\frac{1}{2^2}+\frac{1}{3^2}+\cdots+\frac{1}{n^2} <2$$**(b)** Let $X=\{1, 2, 3 ,\ldots, n\} \ ( n \geq 1)$ and let $A_k$ be non-empty subsets of $X \ (k=1,2,3, \ldots , 2^n -1).$ If $a_k$ be the product of all elements of the set $A_k,$ prove that
$$\sum_{i=1}^{m} \sum_{j=1}^m \frac{1}{a_i \cdot j^2} <2n+1$$
