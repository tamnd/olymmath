---
tag: 8ZATQS88VC
kind: problem
type: answer
answer: "5"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=108311
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given: $b_{1}, b_{2}, b_{3}, b_{4}$ are positive integers, the polynomial $g(z)=(1-z)^{b_{1}}\left(1-z^{2}\right)^{b_{2}}\left(1-z^{3}\right)^{b_{3}}\left(1-z^{4}\right)^{b_{4}}$ when expanded and terms higher than 4th degree are omitted, becomes $1-2 z$. Also, $\alpha$ is the largest root of the polynomial $f(x)=x^{3}-b_{4} x^{2}+b_{2}$. Try to find the remainder when $\left[\alpha^{1995}\right]$ is divided by 9. Here $[x]$ denotes the greatest integer less than or equal to $x$.
