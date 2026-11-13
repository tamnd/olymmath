---
tag: 332BW6WRMF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h555565
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10001
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211997
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2013
    source: hf-ai-mo-aops
    label: 2013 NIMO Problems
---
Let $x,y,z$ be complex numbers satisfying \begin{align*}
z^2 + 5x &= 10z
y^2 + 5z &= 10y
x^2 + 5y &= 10x
\end{align*}
Find the sum of all possible values of $z$ .

*Proposed by Aaron Lin*
