---
tag: TBD7R7G15V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h365213
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28902
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228912
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2008 Tournament Of Towns
---
Solve the system of equations $(n > 2)$ $$\begin{array}{c}\ \sqrt{x_1}+\sqrt{x_2+x_3+\cdots+x_n}=\sqrt{x_2}+\sqrt{x_3+x_4+\cdots+x_n+x_1}=\cdots=\sqrt{x_n}+\sqrt{x_1+x_2+\cdots+x_{n-1}} \end{array}, $$ $$x_1-x_2=1.$$
