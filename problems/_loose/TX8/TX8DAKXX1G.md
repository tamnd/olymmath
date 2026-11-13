---
tag: TX8DAKXX1G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h250680
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65680
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=257153
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
Point $ E$ is selected on side $ AB$ of triangle $ ABC$ in such a way that $ AE: EB = 1: 3$ and point $ D$ is selected on side $ BC$ such that $ CD: DB = 1: 2$ . The point of intersection of $ AD$ and $ CE$ is $ F$ . Then $ \frac {EF}{FC} + \frac {AF}{FD}$ is:

$ \textbf{(A)}\ \frac {4}{5} \textbf{(B)}\ \frac {5}{4} \textbf{(C)}\ \frac {3}{2} \textbf{(D)}\ 2 \textbf{(E)}\ \frac {5}{2}$
