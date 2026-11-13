---
tag: 250DRQPFAJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1993 IMO Shortlist
    url: https://artofproblemsolving.com/community/c6h57720
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25241
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=225996
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: isl/1993
    source: hf-ai-mo-aops
    label: 1993 IMO Shortlist
---
Solve the following system of equations, in which $a$ is a given number satisfying $|a| > 1$ :

$\begin{matrix} x_{1}^2 = ax_2 + 1 x_{2}^2 = ax_3 + 1 \ldots x_{999}^2 = ax_{1000} + 1 x_{1000}^2 = ax_1 + 1 \end{matrix}$
