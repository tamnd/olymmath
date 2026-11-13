---
tag: 2WN6ZVAMAS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h548802
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65428
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=256901
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ahsme
    source: hf-ai-mo-aops
    label: AHSME
---
The symbol $\ge$ means "greater than or equal to"; the symbol $\le$ means "less than or equal to".
In the equation $(x-m)^2-(x-n)^2=(m-n)^2$ ; m is a fixed positive number, and $n$ is a fixed negative number. The set of values $x$ satisfying the equation is: $ \textbf{(A)}\ x\ge 0 \textbf{(B)}\ x\le n \textbf{(C)}\ x=0 \textbf{(D)}\ \text{the set of all real numbers} \textbf{(E)}\ \text{none of these} $
