---
tag: 3XSDAP8GS0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213267
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$P$ is a monic polynomial of odd degree greater than one such that there exists a function $f : \mathbb{R} \rightarrow \mathbb{N}$ such that for each $x \in \mathbb{R}$ ,$$f(P(x))=P(f(x))$$
(a) Prove that there are a finite number of natural numbers in range of $f$.
(b) Prove that if $f$ is not constant then the equation $P(x)-x=0$ has at least two real solutions.
(c) For each natural $n>1$ prove that there exists a function $f : \mathbb{R} \rightarrow \mathbb{N}$ and a monic polynomial of odd degree greater than one $P$ such that for each $x \in \mathbb{R}$ ,$$f(P(x))=P(f(x))$$ and range of $f$ contains exactly $n$ different numbers.
