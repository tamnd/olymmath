---
tag: BHHJFNRWY7
kind: problem
type: answer
answer: '{4,16,49,169,256}'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=103971
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The square of the sum of the digits of a natural number $k$ is denoted as $f_{1}(k)$, and $f_{n}(k)=f_{1}\left[f_{n-1}(k)\right]$, then the range of $f_{n}(11)(n \in$ $\left.\mathbf{N}^{*}\right)$ is
A. $\mathbf{N}^{*}$
B. 5
C. $\{4,16,49,169,256\}$
D. $\{2,4,7,13,16\}$
