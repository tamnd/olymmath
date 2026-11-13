---
tag: PEJ08RYWV8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206963
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove the following equalities of sets:
$$ \text{i)} \{x\in \mathbb{R}\ |\ \log_2 \lfloor x \rfloor = \lfloor \log_2 x\rfloor \} = \bigcup_{m\in \mathbb{N}} \left[2^m,2^m + 1\right)$$

$$ \text{ii)} \{x\in \mathbb{R}\ |\ 2^{\lfloor x\rfloor} = \left\lfloor 2^x\right\rfloor \} = \bigcup_{m\in \mathbb{N}} \left[m, \log_2 (2^m + 1) \right)$$
