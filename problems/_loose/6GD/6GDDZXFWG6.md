---
tag: 6GDDZXFWG6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Spain Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h391117
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5716
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=86376
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: es-ome/2010
    source: hf-ai-mo-aops
    label: 2010 Spain Mathematical Olympiad
---
Let $p$ be a prime number and $A$ an infinite subset of the natural numbers. Let $f_A(n)$ be the number of different solutions of $x_1+x_2+\ldots +x_p=n$ , with $x_1,x_2,\ldots x_p\in A$ . Does there exist a number $N$ for which $f_A(n)$ is constant for all $n<N$ ?
