---
tag: ADYTHE0GRP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 AMC 10
    url: https://artofproblemsolving.com/community/c6h73534
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=64443
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=200888
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: amc10
    source: hf-ai-mo-aops
    label: 2006 AMC 10
---
A license plate in a certain state consists of 4 digits, not necessarily distinct, and 2 letters, also not necessarily distinct. These six characters may appear in any order, except that the two letters must appear next to each other. How many distinct license plates are possible?

$ \textbf{(A) } 10^4\cdot 26^2 \textbf{(B) } 10^3\cdot 26^3 \textbf{(C) } 5\cdot 10^4\cdot 26^2 \textbf{(D) } 10^2\cdot 26^4
\textbf{(E) } 5\cdot 10^3\cdot 26^3$
