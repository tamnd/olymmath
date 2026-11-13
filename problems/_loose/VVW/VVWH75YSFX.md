---
tag: VVWH75YSFX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1991 Irish Math Olympiad
    url: https://artofproblemsolving.com/community/c6h1521555
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44706
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240944
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo/1991
    source: hf-ai-mo-aops
    label: 1991 Irish Math Olympiad
---
Three operations $f,g$ and $h$ are defined on subsets of the natural numbers $\mathbb{N}$ as follows: $f(n)=10n$ , if $n$ is a positive integer; $g(n)=10n+4$ , if $n$ is a positive integer; $h(n)=\frac{n}{2}$ , if $n$ is an *even* positive integer.
Prove that, starting from $4$ , every natural number can be constructed by performing a finite number of operations $f$ , $g$ and $h$ in some order. $[$ For example: $35=h(f(h(g(h(h(4)))))).]$
