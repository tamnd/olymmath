---
tag: JRFCRHF07B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Iran/train/0000.parquet#row=65
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo
    source: hf-mathnet
    label: Iran Iranian Mathematical Olympiad
---
Function $f$ is said to **generate** function $g$ (and denote it by $f \to g$), if $g$ can be written as the composition of function $f$ with itself for several times; i.e., natural number $k$ exists for which $f \circ f \circ \dots \circ f = g$ ($k$ times).
We want to explore some properties of this relation. For example, it can easily be shown that if $f \to g$ and $g \to h$, then $f \to h$. (transitivity)

a) Show that two functions $f \neq g: \mathbb{R} \to \mathbb{R}$ exist for which $f \to g$ and $g \to f$.

b) Prove that for each function $f: \mathbb{R} \to \mathbb{R}$ there are a finite number of functions $g: \mathbb{R} \to \mathbb{R}$ for which $f \to g$ and $g \to f$.

c) Does a function $g: \mathbb{R} \to \mathbb{R}$ exist such that the only function that generates it is itself?

d) Does there exist a function that generates functions $x^3$ and $x^5$?

e) Prove that if there exists a function that generates two linear polynomials $P$ and $Q$, then there exists a linear polynomial that generates both $P$ and $Q$.
