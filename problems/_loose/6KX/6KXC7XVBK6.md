---
tag: 6KXC7XVBK6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h1144935
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14443
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216237
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2016
    source: hf-ai-mo-aops
    label: 2016 NIMO Problems
---
Let $f(n)=\frac{n}{3}$ if $n$ is divisible by $3$ and $f(n)=4n-10$ otherwise. Find the sum of all positive integers $c$ such that $f^5(c)=2$ . (Here $f^5(x)$ means $f(f(f(f(f(x)))))$ .)

*Proposed by Justin Stevens*
