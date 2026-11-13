---
tag: Z49KD5NGZZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1995 IberoAmerican
    url: https://artofproblemsolving.com/community/c6h86724
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=22962
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=224090
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/1995
    source: hf-ai-mo-aops
    label: 1995 IberoAmerican
---
In a $m\times{n}$ grid are there are token. Every token *dominates* every square on its same row ( $\leftrightarrow$ ), its same column ( $\updownarrow$ ), and diagonal ( $\searrow\hspace{-4.45mm}\nwarrow$ )(Note that the token does not \emph{dominate} the diagonal ( $\nearrow\hspace{-4.45mm}\swarrow$ ), determine the lowest number of tokens that must be on the board to *dominate* all the squares on the board.
