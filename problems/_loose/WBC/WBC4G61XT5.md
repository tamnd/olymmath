---
tag: WBC4G61XT5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1987 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h2068542
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28018
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228366
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 1987 Tournament Of Towns
---
We are given three non-negative numbers $A , B$ and $C$ about which it is known that $$ A^4 + B^4 + C^4 \le 2(A^2B^2 + B^2C^2 + C^2A^2) $$ (a) Prove that each of $A, B$ and $C$ is not greater than the sum of the others.
(b) Prove that $A^2 + B^2 + C^2 \le 2(AB + BC + CA)$ .
(c) Does the original inequality follow from the one in (b)?

(V.A. Senderov , Moscow)
