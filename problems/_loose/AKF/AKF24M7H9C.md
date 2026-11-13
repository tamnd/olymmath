---
tag: AKF24M7H9C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h3550963
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2371
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Russia/train/0000.parquet#row=369
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/2025
    source: hf-ai-mo-aops
    label: 2025 All-Russian Olympiad
  - at: ru-allrussian
    source: hf-mathnet
    label: Russia LI Всероссийская математическая олимпиада школьников
---
A pair of polynomials $F(x, y)$ and $G(x, y)$ with integer coefficients is called $\emph{important}$ if from the divisibility of both differences $F(a, b) - F(c, d)$ and $G(a, b) - G(c, d)$ by $100$ , it follows that both $a - c$ and $b - d$ are divisible by 100. Does there exist such an important pair of polynomials $P(x, y)$, $Q(x, y)$, such that the pair $P(x, y) - xy$ and $Q(x, y) + xy$ is also important?
