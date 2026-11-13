---
tag: YQKQSHZV72
kind: problem
type: answer
answer: \mathcal{O}(\log(n)^{3})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=84384
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that the Miller-Rabin algorithm has a time complexity of $\mathcal{O}\left(\log (n)^{3}\right)$.

In the following, we will denote $\alpha$ as the 2-adic valuation of $n-1$, $\beta$ as the integer $(n-1) / 2^{\alpha}$, and $\hat{u}$ as the initial value of the variable $u$.
