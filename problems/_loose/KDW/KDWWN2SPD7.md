---
tag: KDWWN2SPD7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h548868
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65443
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=256916
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
A club with $x$ members is organized into four committees in accordance with these two rules:
$ \text{(1)}\ \text{Each member belongs to two and only two committees} $ $\text{(2)}\ \text{Each pair of committees has one and only one member in common}$ Then $x$ : $\textbf{(A)} \ \text{cannont be determined} $ $\textbf{(B)} \ \text{has a single value between 8 and 16} $ $\textbf{(C)} \ \text{has two values between 8 and 16} $ $\textbf{(D)} \ \text{has a single value between 4 and 8} $ $\textbf{(E)} \ \text{has two values between 4 and 8} $
