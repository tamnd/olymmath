---
tag: BM01RQJW9T
kind: problem
type: answer
answer: (1+x^{5})(1-x^{5}+x^{10}),(1-x^{3}+x^{9})(1+x^{3}+x^{6}),(1-x^{6}+x^{9})(1+x^{3}+x^{6})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=20033
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A trinomial of degree $p$ is a function of the form $f(x)=x^{p}+a x^{q}+1$, where $p, q-$ are natural numbers, $q<p$, and $a$ is an arbitrary real number (possibly equal to 0). Find all pairs of trinomials that give a trinomial of degree 15 when multiplied.
