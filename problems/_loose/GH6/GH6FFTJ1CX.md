---
tag: GH6FFTJ1CX
kind: problem
type: answer
answer: G(n)=n+[\log(n+1+[\log(n+1)])]
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=99796
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
When $F(n)=\left[\mathrm{e}^{m}\right]$, using the $\mathrm{L}-\mathrm{M}$ theorem, it can be proven that the $n$-th positive integer that is not of the form $\left[\mathrm{e}^{m}\right]$ is
$$
G(n)=n+[\log (n+1+[\log (n+1)])] \text {, }
$$

where $m \geqslant 1, \mathrm{e}$ denotes the base of the natural logarithm, and $\log$ is the natural logarithm.
