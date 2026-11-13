---
tag: XBQFAFW5RA
kind: problem
type: answer
answer: f_{1}(x)=x^{5}+10x^{4}+35x^{3}+50x^{2}+24x+120orf_{2}(x)=x^{5}+15x^{4}+85x^{3}+225x^{2}+274x+120
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=182372
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$$
f(x)=\sum_{k=0}^{5} a_{k} x^{k}
$$

is a polynomial of degree 5. Determine integer coefficients $a_{k}>0$ such that at most one of them is divisible by 120, but $f(x)$ is divisible by 120 for all integer $x>=1$.
