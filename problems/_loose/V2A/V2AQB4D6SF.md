---
tag: V2AQB4D6SF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Balkan MO Shortlist
    url: https://artofproblemsolving.com/community/c6h3556992
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=21349
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Balkan_Mathematical_Olympiad/train/0000.parquet#row=220
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: balkan-sl/2024
    source: hf-ai-mo-aops
    label: 2024 Balkan MO Shortlist
  - at: balkan
    source: hf-mathnet
    label: Balkan Mathematical Olympiad 41st Balkan Mathematical Olympiad
---
Find all triples $(a, b, c)$ of positive real numbers that satisfy the system:
$$
\begin{aligned}
11bc - 36b - 15c &= abc
12ca - 10c - 28a &= abc
13ab - 21a - 6b &= abc.
\end{aligned}
$$
