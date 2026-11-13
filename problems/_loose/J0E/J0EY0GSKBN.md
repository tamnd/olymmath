---
tag: J0EY0GSKBN
kind: problem
type: answer
answer: p^{p}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=136473
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$\left(1+x+x^{2}+\cdots+x^{p-1}\right)^{p+1}$ expands to $a_{0}+a_{1} x+a_{2} x^{2}+\cdots+a_{p}^{2}-1$ $x^{p^{2}-1}$. Here, $p$ is a coefficient no less than 3. Then the value of $a_{0}+a_{p}+a_{2 p}+\cdots+a_{p}^{2}-p$ is ( ).
A. $p^{p-1}$
B. $p^{p}$
C. $p^{p^{2}-1}$
D. $p^{p+1}$
