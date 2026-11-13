---
tag: B43SMBRX05
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h548785
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65418
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=256891
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
The symbol $|a|$ means $+a$ if $a$ is greater than or equal to zero, and $-a$ if $a$ is less than or equal to zero; the symbol $<$ means "less than"; the symbol $>$ means "greater than."
The set of values $x$ satisfying the inequality $|3-x|<4$ consists of all $x$ such that: $ \textbf{(A)}\ x^2<49 \textbf{(B)}\ x^2>1 \textbf{(C)}\ 1<x^2<49 \textbf{(D)}\ -1<x<7 \textbf{(E)}\ -7<x<1 $
