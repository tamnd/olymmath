---
tag: JGSKJGNPHC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Saint Petersburg Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3058045
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=57282
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250072
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-spb/2000
    source: hf-ai-mo-aops
    label: 2000 Saint Petersburg Mathematical Olympiad
---
Let $P(x)=x^{2000}-x^{1000}+1$ . Do there exist distinct positive integers $a_1,\dots,a_{2001}$ such that $a_ia_j|P(a_i)P(a_j)$ for all $i\neq j$ ?

*Proposed by A. Baranov*
