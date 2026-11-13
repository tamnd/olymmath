---
tag: J9WY96BQWX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Saint Petersburg Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3058057
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=57287
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250077
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
Sequences $x_1,x_2,\dots,$ and $y_1,y_2,\dots,$ are defined with $x_1=\dfrac{1}{8}$ , $y_1=\dfrac{1}{10}$ and $x_{n+1}=x_n+x_n^2$ , $y_{n+1}=y_n+y_n^2$ . Prove that $x_m\neq y_n$ for all $m,n\in\mathbb{Z}^{+}$ .

*Proposed by A. Golovanov*
