---
tag: RXDD0345HR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90843
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=387
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(a) Let $a, b$, and $n$ be positive integers such that $a b=n^{2}+1$. Prove that

$$
|a-b| \geq \sqrt{4 n-3}
$$

(b) Prove that there are infinitely many such triples $(a, b, n)$ such that equality occurs.
