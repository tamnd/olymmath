---
tag: GJHP20A7WW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h281760
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65340
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=256813
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
Given the system of equations
$$ ax + (a - 1)y = 1
(a + 1)x - ay = 1.
$$
For which one of the following values of $ a$ is there no solution $ x$ and $ y$ ?

$ \textbf{(A)}\ 1 \textbf{(B)}\ 0 \textbf{(C)}\ - 1 \textbf{(D)}\ \frac {\pm \sqrt {2}}{2} \textbf{(E)}\ \pm\sqrt {2}$
