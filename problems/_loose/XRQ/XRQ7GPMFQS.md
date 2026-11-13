---
tag: XRQ7GPMFQS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h258311
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65292
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=198428
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
If $ p$ is a positive integer, then $ \frac {3p + 25}{2p - 5}$ can be a positive integer, if and only if $ p$ is:

$ \textbf{(A)}\ \text{at least }3 \textbf{(B)}\ \text{at least }3\text{ and no more than }35 \textbf{(C)}\ \text{no more than }35$
$ \textbf{(D)}\ \text{equal to }35 \textbf{(E)}\ \text{equal to }3\text{ or }35$
